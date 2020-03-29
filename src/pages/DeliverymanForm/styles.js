import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  margin: 30px auto;
  width: 900px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      color: #444;
    }

    div.buttons {
      display: flex;
      align-items: center;

      .go-back {
        margin-right: 16px;
      }
    }
  }
`;

export const Form = styled(Unform)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  padding: 30px;
  background: #fff padding-box;

  div.avatar-input {
    margin: 0 auto;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #ccc;
    background: #eee;
    color: #ccc;
    font-size: 66px;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    cursor: pointer;
  }

  label {
    margin-bottom: 18px;
    width: 100%;
    display: block;
    font-weight: bold;
    color: #444;

    span {
      display: block;
      margin-bottom: 9px;
    }
  }

  input {
    width: 100%;
    height: 45px;
    padding: 15px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #444;
  }
`;
