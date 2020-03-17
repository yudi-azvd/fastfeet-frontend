import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo.png';
import { Container } from './styles';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }

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

      <aside>
        <strong>{name}</strong>

        <button type="button" onClick={handleSignOut}>
          sair do sistema
        </button>
      </aside>
    </Container>
  );
}
