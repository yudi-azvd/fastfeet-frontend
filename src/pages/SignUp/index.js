import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '../../assets/fastfeet-logo.png';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet logo" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          SEU NOME
          <Input type="name" name="name" id="name" placeholder="Maria José" />
        </label>

        <label htmlFor="email">
          SEU E-MAIL
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label htmlFor="password">
          SUA SENHA
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </label>

        <SubmitButton label="Cadastrar" loading={loading} />
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
