import React from 'react';

import history from '../../services/history';

import Input from '../../components/Form/Input';
import { Container, Form } from './styles';

export default function DeliveryForm() {
  const { delivery } = history.location.state;
  console.log(delivery.product);

  return (
    <Container>
      <header>
        <h1>Edição de encomenda</h1>

        <div className="buttons">
          <button type="button">voltar</button>
          <button type="button">salvar</button>
        </div>
      </header>

      <Form initialData={delivery}>
        <div className="input-group">
          <label htmlFor="recipient">
            <span>Destinatário</span>
            <Input id="recipient" name="recipient" type="text" />
          </label>

          <label htmlFor="deliveryman">
            <span>Entregador</span>
            <Input name="deliveryman" type="text" />
          </label>
        </div>

        <label htmlFor="product">
          <span>Produto</span>
          <Input id="product" name="product" type="text" />
        </label>
      </Form>
    </Container>
  );
}
