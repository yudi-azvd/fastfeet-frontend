import React from 'react';

import { ModalContainer } from './styles';

export default function ActionsModal() {
  return (
    <>
      <ModalContainer>
        <ul>
          <li>visualizar</li>
          <li>editar</li>
          <li>excluir</li>
        </ul>
      </ModalContainer>
    </>
  );
}
