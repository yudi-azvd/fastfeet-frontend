import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function MiniAvatar({ deliveryman, color }) {
  return (
    <Container color={color}>
      {deliveryman.avatar_id ? (
        <img src={deliveryman.avatar.url} alt="imagem de perfil" />
      ) : (
        <span> {deliveryman.name.slice(0, 2)} </span>
      )}
    </Container>
  );
}

MiniAvatar.propTypes = {
  color: PropTypes.string.isRequired,
  deliveryman: PropTypes.shape({
    name: PropTypes.string,
    avatar_id: PropTypes.number,
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
  }),
};

MiniAvatar.defaultProps = {
  deliveryman: PropTypes.shape({
    avatar_id: 0,
  }),
};
