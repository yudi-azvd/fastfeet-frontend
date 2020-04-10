import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Form/Input';
import { GoBack as GoBackButton } from '../../components/Buttons/GoBack';
import { Save as SaveButton } from '../../components/Buttons/Save';

import { Container, Form } from './styles';

export default function RecipientForm({ match }) {
  const [recipient, setRecipient] = useState({});
  const formRef = useRef(null);
  const editMode = String(match.path).endsWith('/edit');
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    street: Yup.string().required('A rua é obrigatória'),
    number: Yup.number()
      .integer('Deve ser um número')
      .min(0)
      .required('O número é obrigatório'),
    complement: Yup.string().required('O complemento é obrigatório'),
    city: Yup.string().required('A cidade é obrigatória'),
    state: Yup.string().required('O estado é obrigatório'),
    cep: Yup.string()
      .length(9, 'Siga o formato 99999-9999')
      .required('O CEP é obrigatório'),
  });

  useEffect(() => {
    async function loadRecipient() {
      const { data } = await api.get(`/recipients/?id=${match.params.id}`);
      setRecipient(data);
    }

    if (editMode) loadRecipient();
  }, [editMode, match.params.id]);

  function submitForm() {
    formRef.current.submitForm();
  }

  async function handleEditSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      const response = await api.put(`/recipients/${recipient.id}`, data);
      console.log(response);
      setRecipient(response.data);
      toast.success('Destinatário atualizado com sucesso!');
      formRef.current.setErrors({});
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
      const updated = await api.post(`/recipients`, data);
      setRecipient(updated);
      toast.success('Destinatário cadastrado com sucesso!');
      formRef.current.setErrors({});
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

  return (
    <Container>
      <header>
        <h1>
          {editMode ? 'Editar ' : 'Cadastrar '}
          destinatário
        </h1>

        <div className="buttons">
          <GoBackButton to="/recipients" />
          <SaveButton onClick={() => submitForm()} />
        </div>
      </header>

      <Form
        ref={formRef}
        initialData={recipient}
        onSubmit={editMode ? handleEditSubmit : handleCreateSubmit}
      >
        <label htmlFor="name">
          <span>Nome</span>
          <Input
            id="name"
            name="name"
            placeholder={editMode ? '' : 'Nome do destinatário'}
          />
        </label>

        <div className="mid-section">
          <label htmlFor="street">
            <span>Rua</span>
            <Input
              id="street"
              name="street"
              placeholder={editMode ? '' : 'Nome da rua'}
            />
          </label>
          <label htmlFor="number">
            <span>Número</span>
            <Input
              id="number"
              name="number"
              placeholder={editMode ? '' : '123'}
            />
          </label>
          <label htmlFor="complement">
            <span>Complemento</span>
            <Input
              id="complement"
              name="complement"
              placeholder={editMode ? '' : 'em frente à padaria'}
            />
          </label>
        </div>

        <div className="bottom-section">
          <label htmlFor="city">
            <span>Cidade</span>
            <Input
              id="city"
              name="city"
              placeholder={editMode ? '' : 'Campo Grande'}
            />
          </label>
          <label htmlFor="state">
            <span>Estado</span>
            <Input
              id="state"
              name="state"
              placeholder={editMode ? '' : 'São Paulo'}
            />
          </label>
          <label htmlFor="cep">
            <span>CEP</span>
            <Input
              id="cep"
              name="cep"
              placeholder={editMode ? '' : '99999-9999'}
            />
          </label>
        </div>
      </Form>
    </Container>
  );
}

RecipientForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
  }).isRequired,
};
