import React from 'react';
import { MdDone } from 'react-icons/md';

import { Button } from './styles';

export function Save({ ...rest }) {
  return (
    <Button {...rest} className="save">
      <MdDone size="24px" color="#fff" /> salvar
    </Button>
  );
}
