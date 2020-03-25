import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

/* CLICK OUTSIDE */
/* https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82 */
const BasicModal = ({ open, children, className, close }) => {
  const contentRef = useRef();
  const [isOpen, setIsOpen] = useState(open);

  const handleClick = useCallback(
    event => {
      if (contentRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
      close();
    },
    [close]
  );

  const handleKeyUp = useCallback(
    event => {
      if (event.key !== 'Escape') {
        return;
      }

      setIsOpen(false);
      close();
    },
    [close]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keyup', handleKeyUp);
    } else {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleClick, handleKeyUp, open]);

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
  close: PropTypes.func.isRequired,
};

export default BasicModal;
