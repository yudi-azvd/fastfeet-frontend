import React from 'react';
import PropTypes from 'prop-types';

import { StatusContainer } from './styles';

export default function DeliveryStatus({ delivery }) {
  const color = '#2CA42B';

  return (
    <StatusContainer color={color}>
      <span>status</span>
    </StatusContainer>
  );
}

DeliveryStatus.propTypes = {
  delivery: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    cancelledAt: PropTypes.string,
  }).isRequired,
};
