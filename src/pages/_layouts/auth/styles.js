import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #7d40e7;
  height: 100%;

  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  text-align: center;

  img {
    margin-top: 30px;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      color: #444;
      margin-bottom: 15px;

      input {
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 9px;
        height: 45px;
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #999;
      }
    }

    button {
      color: #fff;
      background: #7d40e7;
      font-weight: bold;
      font-size: 16px;
      height: 45px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 30px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }
`;
