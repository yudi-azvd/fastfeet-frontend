import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '../../assets/fastfeet-logo.png';

import Input from '../../components/Input';

// import api from '../../services/api';

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
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

        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
