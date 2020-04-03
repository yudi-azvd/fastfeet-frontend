import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import api from '../../../services/api';

import { Container, ImageCrop, DefaultAvatarPreview } from './styles';

export default function AvatarInput({ ...rest }) {
  const inputRef = useRef(null);
  const { registerField, defaultValue } = useField('avatar');
  console.log('DEFAULT 1', defaultValue);
  console.log('DEFAULT 2', defaultValue && defaultValue.url);
  const p = defaultValue && defaultValue.url;
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  // const [preview, setPreview] = useState('string');
  // const [preview, setPreview] = useState(p);
  // console.log('PREVIEW USESTATE', preview);
  // console.log('               P', p);
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

    if (!file) {
      setPreview(null);
    } else {
      // console.log('run setPreview: else set previewURL=>', previewURL);
      setPreview(previewURL);

      data.append('file', file);

      const response = await api.post('/files', data);
      const { id } = response.data;

      setFileId(id);
    }
  }

  useEffect(() => {
    // console.log('run update on preview', preview);
  });

  useEffect(() => {
    // console.log('run registerField');
    // console.log('                 ', defaultPreview);
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
        // console.log('regField setValue', defaultPreview);
        setPreview(defaultValue);
      },
    });
  }, [defaultValue, registerField]);

  return (
    <Container>
      <label className="avatar" htmlFor="avatar">
        {console.log('RENDER PREVIEW:', preview)}
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
