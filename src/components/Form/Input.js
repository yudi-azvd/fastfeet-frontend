import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={defaultValue} {...rest} />
      {error && <span className="error"> deu erro </span>}
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
};
