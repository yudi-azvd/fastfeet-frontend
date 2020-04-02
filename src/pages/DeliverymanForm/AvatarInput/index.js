import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import api from '../../../services/api';

import { Container, ImageCrop, DefaultAvatarPreview } from './styles';

export default function AvatarInput({ ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField('avatar');
  console.log('DEFAULT', defaultValue);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [fileId, setFileId] = useState(null);

  // const handlePreview = useCallback(event => {
  //   console.log('HANDLE PREVIEW');
  //   const file = event.target.files ? event.target.files[0] : null;

  //   if (!file) {
  //     setPreview(null);
  //   }
  //   console.log('FILE', file);
  //   const previewURL = URL.createObjectURL(file);
  //   console.log('Prev url:', previewURL);

  //   setPreview(previewURL);
  // }, []);

  async function handleChange(event) {
    const data = new FormData();

    const file = event.target.files ? event.target.files[0] : null;
    const previewURL = URL.createObjectURL(file);

    data.append('file', file);

    const response = await api.post('/files', data);
    const { id } = response.data;

    setFileId(id);

    if (!file) {
      setPreview(null);
    } else {
      setPreview(previewURL);
    }
  }

  useEffect(() => {
    registerField({
      name: 'avatar_id',
      ref: inputRef.current,
      path: 'dataset.file',
      // path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        console.log(_, value);
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

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