import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ActionsDropdown({ open, children }) {
  return (
    <>
      <Container open={open}>{children}</Container>
    </>
  );
}

ActionsDropdown.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ActionsDropdown.defaultProps = {
  open: false,
};
