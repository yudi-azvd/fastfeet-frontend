import styled from 'styled-components';

export const Button = styled.button.attrs({
  type: 'submit',
})`
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

  svg {
    margin-right: 7px;
  }
`;
