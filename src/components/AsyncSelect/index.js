import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select/async';
import { useField } from '@unform/core';

import { selectStyle } from './styles';

export default function AsyncSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (ref.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(option => option.value);
        }

        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Select
        ref={selectRef}
        defaultValue={defaultValue}
        cacheOptions
        {...rest}
        styles={selectStyle}
      />
      {error && <span className="error"> deu erro </span>}
    </>
  );
}

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
};
