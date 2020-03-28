import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  border: none;
  background: #7d40e7;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  height: 36px;
  border-radius: 4px;
  min-width: 112px;
  padding-left: 21px;
  padding-right: 16px;

  text-transform: uppercase;

  display: inline-flex;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#7d40e7')};
  }

  svg {
    margin-right: 7.59px;
  }
`;
