import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '../../assets/fastfeet-logo.png';

import Input from '../../components/Input';

import { signInRequest } from '../../store/modules/auth/actions';

// import api from '../../services/api';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet logo" />

      <Form onSubmit={handleSubmit}>
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

        <button type="submit">Entrar</button>

        {loading ? 'carregando' : ''}

        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
