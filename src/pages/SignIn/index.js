import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo.png';

import api from '../../services/api';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet logo" />

      <form>
        <label htmlFor="email">
          SEU E-MAIL
          <input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label htmlFor="password">
          SUA SENHA
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </label>

        <button type="submit">Entrar</button>

        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
