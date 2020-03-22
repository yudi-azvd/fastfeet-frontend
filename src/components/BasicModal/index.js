import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function BasicModal({ open, children }) {
  return (
    <Container open={open}>
      <div className="modal-component-content">{children}</div>
    </Container>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
