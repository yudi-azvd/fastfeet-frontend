import React from 'react';

import bigLogo from '../../assets/fastfeet-logo.png';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={bigLogo} alt="FastFeet logo" />

      <form>
        <label htmlFor="email">
          SEU E-MAIL{' '}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>

        <label htmlFor="password">
          SUA SENHA{' '}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </label>

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
