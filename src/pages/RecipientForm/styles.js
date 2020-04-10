import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 900px;
  min-width: 500px;
  width: 90%;

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

  label {
    font-weight: bold;
    color: #444;

    span {
      display: block;
      margin-bottom: 9px;
    }
  }

  input {
    width: 100%;
    border-radius: 4px;
    height: 45px;
    padding: 15px;
    border: 1px solid #ddd;
    color: #444;

    ::-webkit-input-placeholder {
      /* Edge */
      color: #999;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #999;
    }

    ::placeholder {
      color: #999;
    }
  }

  .mid-section,
  .bottom-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .mid-section {
    margin-top: 16px;
    margin-bottom: 16px;

    label[for='street'] {
      width: 71%;
    }

    label[for='number'] {
      width: 12%;
    }

    label[for='complement'] {
      width: 12%;
    }
  }

  .bottom-section {
    label {
      width: 32%;
    }
  }
`;
