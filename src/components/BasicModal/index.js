import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

/* CLICK OUTSIDE */
/* https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82 */
const BasicModal = ({ open, children, className }) => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(open);

  function handleClick(event) {
    if (contentRef.current.contains(event.target)) {
      console.log('not gonna close', event.target);
      return;
    }

    console.log('gonna CLOSE');
    setIsOpen(false);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  return (
    <Container
      className={`${className} modal-component-container`}
      open={isOpen}
    >
      <div ref={contentRef} className="modal-component-content">
        {children}
      </div>
    </Container>
  );
};

BasicModal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default BasicModal;
