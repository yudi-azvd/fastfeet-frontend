import React from 'react';

import { Container } from './styles';

export default function ActionsDropdown({ open, children }) {
  return (
    <>
      <Container open={open}>{children}</Container>
    </>
  );
}
