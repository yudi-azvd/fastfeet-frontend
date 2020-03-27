import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  color: #fff;
  background: #7d40e7;
  font-weight: bold;
  font-size: 16px;
  height: 45px;
  border: 0;
  border-radius: 4px;
  margin-bottom: 15px;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#7d40e7')};
  }

  &[disabled] {
    cursor: wait;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear;
      }
    `}
`;
