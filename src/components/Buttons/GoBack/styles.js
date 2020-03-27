import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const A = styled(Link)`
  background: #ccc;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  height: 36px;
  border-radius: 4px;
  padding: 12px;
  text-decoration: none;

  text-transform: uppercase;

  display: flex;
  align-items: center;

  svg {
    margin-right: 7.59px;
  }
`;
