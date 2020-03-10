import React from 'react';
import { GoPlus } from 'react-icons/go';

import { Button } from './styles';

// tem que receber um link
export default function CreateButton() {
  return (
    <Button type="button">
      <GoPlus size={16} /> CADASTRAR
    </Button>
  );
}
