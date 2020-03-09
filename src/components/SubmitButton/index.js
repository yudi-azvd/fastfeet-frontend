import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Button } from './styles';

export default function SubmitButton({ label, loading }) {
  return (
    <Button loading={loading ? 1 : 0}>{loading ? <FaSpinner /> : label}</Button>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
