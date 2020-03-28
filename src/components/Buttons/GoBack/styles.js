import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const A = styled(Link)`
  background: #ccc;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  height: 36px;
  border-radius: 4px;
  text-decoration: none;
  /* Não fica exatamente com 112px porque o svg tem size 24px */
  /* max-width: 112px; */
  padding-left: 22px;
  padding-right: 24px;

  text-transform: uppercase;

  display: flex;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#ccc')};
  }
`;
