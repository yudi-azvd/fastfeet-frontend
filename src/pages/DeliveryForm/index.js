import React, { useRef } from 'react';

import history from '../../services/history';
import api from '../../services/api';

import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';
import AsyncSelect from '../../components/AsyncSelect';
import Input from '../../components/Form/Input';
import { Container, Form } from './styles';

export default function DeliveryForm() {
  const formRef = useRef(null);
  const { delivery } = history.location.state;

  delivery.recipient_id = {
    value: delivery.recipient.id,
    label: delivery.recipient.name,
  };

  delivery.deliveryman_id = {
    value: delivery.deliveryman.id,
    label: delivery.deliveryman.name,
  };

  function loadDeliverymenOptions(inputValue, callback) {
    setTimeout(() => {
      api
        .get(`/deliverymen?q=${inputValue}`)
        .then(response =>
          response.data.map(deliveryman => ({
            value: deliveryman.id,
            label: deliveryman.name,
          }))
        )
        .then(options => {
          callback(options);
        });
    }, 1000);
  }

  function submitForm() {
    formRef.current.submitForm();
  }

  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <header>
        <h1>Edição de encomenda</h1>

        <div className="buttons">
          <GoBackButton to="/deliveries" />
          <SaveButton onClick={() => submitForm()} />
        </div>
      </header>

      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={delivery || null}
      >
        <div className="input-group">
          <label htmlFor="recipient">
            <span>Destinatário</span>
            <AsyncSelect
              id="recipient"
              loadOptions={loadDeliverymenOptions}
              name="recipient_id"
            />
          </label>

          <label htmlFor="deliveryman">
            <span>Entregador</span>
            <AsyncSelect id="deliveryman" name="deliveryman_id" />
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
