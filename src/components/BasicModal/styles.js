import styled from 'styled-components';

export const Container = styled.div.attrs({
  id: 'modal-container',
})`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;

  div.modal-component-content {
    position: absolute;
    /* top e bottom precisam estar deifinidos 
    pra que uma altura esteja definida (?). 
    left e right precisam estar definidos p que
    ele tenha comprimento. */
    top: 0px;
    left: 40px;
    right: 40px;
    bottom: 10px;
    box-shadow: 0px 0px 10px #00000033;
    background: #fff;
    overflow: auto;
    border-radius: 4px;
    margin: 238px auto;
    width: 450px;
    min-height: 253px;
    padding: 30px;
  }
`;
