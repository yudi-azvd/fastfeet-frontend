import React from 'react';
import PropTypes from 'prop-types';

import { Span } from './styles';

export default function DefaultAvatar({ initials, color }) {
  return <Span color={color}> {initials} </Span>;
}

DefaultAvatar.propTypes = {
  initials: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
