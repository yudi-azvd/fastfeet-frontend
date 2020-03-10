import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GoPlus } from 'react-icons/go';

import { Button } from './styles';

// tem que receber um link
export default function CreateButton({ link }) {
  return (
    <Link to={link}>
      <Button type="button">
        <GoPlus size={16} /> CADASTRAR
      </Button>
    </Link>
  );
}

CreateButton.propTypes = {
  link: PropTypes.string.isRequired,
};
