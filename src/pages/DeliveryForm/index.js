import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';
import AsyncSelect from '../../components/AsyncSelect';
import Input from '../../components/Form/Input';
import { Container, Form } from './styles';

export default function DeliveryForm({ match }) {
  const editMode = String(match.path).endsWith('/edit');
  const formRef = useRef(null);
  const [delivery, setDelivery] = useState(null);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`/deliveries?id=${match.params.id}`);
      const d = response.data;

      // Isso é pro defaultValue dos AsyncSelect funcionarem.
      // Sim, me cheira a gambiarra.
      formRef.current.setFieldValue('deliveryman_id', {
        label: d.deliveryman.name,
        value: d.deliveryman.id,
      });

      formRef.current.setFieldValue('recipient_id', {
        label: d.recipient.name,
        value: d.recipient.id,
      });

      setDelivery({
        ...d,
        deliveryman_id: {
          value: d.deliveryman.id,
          label: d.deliveryman.name,
        },
        recipient_id: {
          value: d.recipient.id,
          label: d.recipient.name,
        },
      });
    }

    if (editMode) loadDelivery();
  }, [editMode, match, match.params.id]);

  function loadRecipientsOptions(inputValue, callback) {
    setTimeout(() => {
      api
        .get(`/recipients?q=${inputValue}`)
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

  async function handleSubmit(data) {
    try {
      await api.put(`/deliveries/${delivery.id}`, data);
      toast.success('Encomenda atualizada com sucesso!');
    } catch (error) {
      toast.error(String(error));
    }
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
              placeholder="Carregando..."
              id="recipient"
              loadOptions={loadRecipientsOptions}
              name="recipient_id"
            />
          </label>

          <label htmlFor="deliveryman">
            <span>Entregador</span>
            <AsyncSelect
              placeholder="Carregando..."
              id="deliveryman"
              loadOptions={loadDeliverymenOptions}
              name="deliveryman_id"
            />
          </label>
        </div>

        <label htmlFor="product">
          <span>Produto</span>
          <Input
            id="product"
            name="product"
            type="text"
            placeholder="Carregando..."
          />
        </label>
      </Form>
    </Container>
  );
}

DeliveryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
