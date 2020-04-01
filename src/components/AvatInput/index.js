import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function AvatInput() {
  return (
    <Container>
      <input type="text" />
    </Container>
  );
}
