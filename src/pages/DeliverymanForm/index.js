import React, { useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Container, Form } from './styles';

import api from '../../services/api';

import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';
import Input from '../../components/Form/Input';

export default function DeliverymanForm({ match }) {
  const formRef = useRef(null);
  const { id: deliverymanId } = match.params;
  const editMode = match.path.endsWith('/edit');
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Nome com 3 letras no mínimo.')
      .required(),
    email: Yup.string()
      .email()
      .required('O email é obrigatório.'),
  });

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`/deliverymen?id=${deliverymanId}`);
      formRef.current.setData(response.data);
    }

    loadDeliveryman();
  }, [deliverymanId]);

  function submitForm() {
    formRef.current.submitForm();
  }

  async function handleEditSubmit(data) {
    try {
      await schemaValidation.validate(data, { abortEarly: false });
      await api.put(`/deliverymen/${deliverymanId}`, data);
      toast.success('Entregador atualizado com sucesso!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        toast.error('Verifique os seus dados.');
        formRef.current.setErrors(validationErrors);
      } else {
        toast.error(String(error));
      }
    }
  }

  async function handleCreateSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      await api.post(`/deliverymen`, data);
      toast.success('Entregador atualizado com sucesso!');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        toast.error('Verifique os seus dados.');
        formRef.current.setErrors(validationErrors);
      } else {
        toast.error(String(error));
      }
    }
  }

  return (
    <Container>
      <header>
        <h1>{editMode ? 'Edição de entregador' : 'Cadastro de entregador'}</h1>

        <div className="buttons">
          <GoBackButton to="/deliveries" />
          <SaveButton onClick={() => submitForm()} />
        </div>
      </header>

      <Form
        ref={formRef}
        onSubmit={editMode ? handleEditSubmit : handleCreateSubmit}
      >
        <div className="avatar-input">JD</div>

        <label htmlFor="name">
          <span>Nome</span>
          <Input
            id="name"
            name="name"
            placeholder={editMode ? '' : 'Fulano da Silva'}
          />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <Input
            id="email"
            placeholder={editMode ? '' : 'fulano@email.com'}
            name="email"
          />
        </label>
      </Form>
    </Container>
  );
}

DeliverymanForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
