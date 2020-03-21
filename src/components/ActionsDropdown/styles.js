import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.ul`
  padding: 10px;
  width: 150px;
  border-radius: 4px;
  box-shadow: 0 0 2px #00000026;
  /* igual a: */
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.15); */
  background: #fff;
  font-size: 16px;

  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 14px);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 4.5px);
    top: -7px;
    z-index: -1;
    width: 0;
    height: 0;
    border-left: 4.5px solid transparent;
    border-right: 4.5px solid transparent;
    border-bottom: 7px solid #fff;
    filter: drop-shadow(0px -3px 2px rgba(0, 0, 0, 0.15));
  }

  li {
    cursor: pointer;
    padding: 8px 0;
    display: flex;
    align-items: center;
    line-height: 100%;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    color: #999;

    &:last-child {
      border-bottom: 0;
    }

    svg {
      margin-right: 8px;
      width: 16px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    &:hover svg {
      opacity: 1;
    }

    span {
      transition: color 0.2s;
    }

    &:hover span {
      color: ${darken(0.2, '#999999')};
    }
  }
`;
