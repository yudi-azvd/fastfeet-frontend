import React from 'react';

import bigLogo from '../../assets/fastfeet-logo.png';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={bigLogo} alt="FastFeet logo" />

      <form action="">
        <input type="text" name="name" id="name" />
      </form>
    </>
  );
}
