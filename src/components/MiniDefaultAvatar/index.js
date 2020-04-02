import React from 'react';
import PropTypes from 'prop-types';

import { Span } from './styles';

export default function MiniDefaultAvatar({ initials, color }) {
  return <Span color={color}> {initials} </Span>;
}

MiniDefaultAvatar.propTypes = {
  initials: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
