import React from 'react';

import { Container, Form } from './styles';

import Input from '../../components/Form/Input';
import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';

export default function DeliverymanForm() {
  const editMode = true;

  return (
    <Container>
      <header>
        <h1>{editMode ? 'Edição de entregador ' : 'Cadastro de entregador'}</h1>

        <div className="buttons">
          <GoBackButton to="/deliveries" />
          {/* <SaveButton onClick={() => submitForm()} /> */}
          <SaveButton />
        </div>
      </header>

      <Form>
        <div className="avatar-input">JD</div>

        <label htmlFor="name">
          <span>Nome</span>
          <Input id="name" name="name" />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <Input id="email" name="email" />
        </label>
      </Form>
    </Container>
  );
}
