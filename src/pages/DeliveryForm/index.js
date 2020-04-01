import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';

import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';
import AsyncSelect from '../../components/AsyncSelect';
import Input from '../../components/Form/Input';
import { Container, Form } from './styles';

export default function DeliveryForm({ match }) {
  const formRef = useRef(null);
  const [delivery, setDelivery] = useState(null);
  const editMode = String(match.path).endsWith('/edit');
  const schema = Yup.object().shape({
    recipient_id: Yup.number(),
    deliveryman_id: Yup.number(),
    product: Yup.string().min(1, 'Não deixe o nome do produto vazio'),
  });

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

  async function handleEditSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      await api.put(`/deliveries/${delivery.id}`, data);
      toast.success('Encomenda atualizada com sucesso!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        formRef.current.setErrors(validationErrors);
        // como tratar erros dos campos recipient_id e deliveryman_id???
        toast.error('Erro de validação. Verifique seus dados!');
      } else {
        toast.error(String(error));
      }
    }
  }

  async function handleCreateSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      await api.post(`/deliveries`, data);
      toast.success('Encomenda criada com sucesso!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        // como tratar erros dos campos recipient_id e deliveryman_id???
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        formRef.current.setErrors(validationErrors);
        toast.error('Erro de validação. Verifique seus dados!');
      } else {
        toast.error(String(error));
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>{editMode ? 'Edição de encomenda' : 'Cadastrar encomenda'}</h1>

        <div className="buttons">
          <GoBackButton to="/deliveries" />
          <SaveButton onClick={() => submitForm()} />
        </div>
      </header>

      <Form
        ref={formRef}
        // seria melhor que não houvesse tantas decisões na renderização
        onSubmit={editMode ? handleEditSubmit : handleCreateSubmit}
        initialData={delivery || null}
      >
        <div className="input-group">
          <label htmlFor="recipient">
            <span>Destinatário</span>
            <AsyncSelect
              placeholder={editMode ? 'Carregando...' : 'Nome do destinatário'}
              id="recipient"
              loadOptions={loadRecipientsOptions}
              name="recipient_id"
            />
          </label>

          <label htmlFor="deliveryman">
            <span>Entregador</span>
            <AsyncSelect
              placeholder={editMode ? 'Carregando...' : 'Nome do entregador'}
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
            placeholder={editMode ? 'Carregando...' : 'Nome do produto'}
          />
        </label>
      </Form>
    </Container>
  );
}

DeliveryForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
  }).isRequired,
};
