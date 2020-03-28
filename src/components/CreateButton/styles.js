import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  width: 142px;
  height: 36px;
  color: #fff;
  background: #7d40e7;
  border: 0;
  border-radius: 4px;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#7d40e7')};
  }

  svg {
    margin-right: 7px;
  }
`;
