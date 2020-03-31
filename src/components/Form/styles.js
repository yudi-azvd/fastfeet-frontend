import styled from 'styled-components';

export const Container = styled.div`
  input {
    transition: all 100ms;

    &:hover {
      border-color: hsl(0, 0%, 70%);
    }
  }

  span.error {
    color: #e74c3c;
    margin-top: 4px;
  }
`;
