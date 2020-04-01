import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function AvatInput({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(event => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'values[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {preview && <img src={preview} alt="Preview" width="100" />}
      <input ref={inputRef} onChange={handlePreview} type="file" {...rest} />
      {error && <span className="error">{error}</span>}
    </Container>
  );
}

AvatInput.propTypes = {
  name: PropTypes.string.isRequired,
};
