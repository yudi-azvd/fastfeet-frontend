import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { A } from './styles';

export function GoBack({ to }) {
  return (
    <A className="go-back" to={to}>
      <MdKeyboardArrowLeft size={24} color="#fff" /> voltar
    </A>
  );
}

GoBack.propTypes = {
  to: PropTypes.string.isRequired,
};
