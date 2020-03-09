import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo.png';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <Link id="logo" to="/">
          <img src={logo} alt="FastFeet" />
        </Link>

        <div>
          <ul>
            <li>
              <NavLink activeClassName="selected" to="/deliveries">
                ENCOMENDAS
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/deliverymen">
                ENTREGADORES
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/recipients">
                DESTINATÁRIOS
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="selected" to="/problems">
                PROBLEMAS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <aside>profile</aside>
    </Container>
  );
}
