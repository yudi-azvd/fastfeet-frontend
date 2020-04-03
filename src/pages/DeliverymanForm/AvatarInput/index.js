import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import api from '../../../services/api';

import { Container, ImageCrop, DefaultAvatarPreview } from './styles';

/** ???
 * useState(defaultValue && defaultValue.url) não causa a devida
 * re-renderização, apesar de se for passado um valor literal, como
 * uma string, aí dá certo.
 *
 * Tem como fazer dar certo sem o primeiro useEffect?
 */
export default function AvatarInput({ ...rest }) {
  const inputRef = useRef(null);
  const { registerField, defaultValue } = useField('avatar');
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [fileId, setFileId] = useState(null);

  async function handleChange(event) {
    const data = new FormData();

    const file = event.target.files ? event.target.files[0] : null;
    const previewURL = URL.createObjectURL(file);

    if (!file) {
      setPreview(null);
    } else {
      setPreview(previewURL);

      data.append('file', file);

      const response = await api.post('/files', data);
      const { id } = response.data;

      setFileId(id);
    }
  }

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: 'avatar_id',
      ref: inputRef.current,
      path: 'dataset.file',
      clearValue(ref) {
        ref.value = '';
        setFileId(null);
        setPreview(null);
      },
      setValue(_, value) {
        setFileId(value);
        setPreview(defaultValue.url);
      },
    });
  }, [defaultValue, registerField]);

  return (
    <Container>
      <label className="avatar" htmlFor="avatar">
        {preview ? (
          <ImageCrop>
            <img src={preview} alt="Preview" width="200" />
          </ImageCrop>
        ) : (
          <DefaultAvatarPreview>JD</DefaultAvatarPreview>
        )}

        <input
          id="avatar"
          ref={inputRef}
          onChange={handleChange}
          data-file={fileId}
          type="file"
          {...rest}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
};
