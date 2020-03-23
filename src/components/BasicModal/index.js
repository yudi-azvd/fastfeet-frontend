import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

/* CLICK OUTSIDE */
/* https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82 */
export default function BasicModal({ open, children, className }) {
  return (
    <Container className={`${className} modal-component-container`} open={open}>
      <div className="modal-component-content">{children}</div>
    </Container>
  );
}

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};
