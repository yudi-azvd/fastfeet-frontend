import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { StatusContainer } from './styles';

const colorMap = {
  cancelada: '#DE3B3B',
  entregue: '#2CA42B',
  retirada: '#4D85EE',
  pendente: '#C1BC35',
  '': 'grey',
};

export default function DeliveryStatus({ delivery }) {
  // PRECISA DE REFATORAÇÃO
  // a ordem importa aqui
  // TYPO: _canceled_ em todo esse arquivo
  const status = useMemo(() => {
    if (delivery.canceledAt) {
      return 'cancelada';
    }
    if (delivery.endDate) {
      return 'entregue';
    }
    if (delivery.startDate) {
      return 'retirada';
    }
    if (!delivery.startDate) {
      return 'pendente';
    }

    return '';
  }, [delivery.canceledAt, delivery.endDate, delivery.startDate]);

  return (
    <StatusContainer color={colorMap[status]}>
      <span> {status} </span>
    </StatusContainer>
  );
}

DeliveryStatus.propTypes = {
  delivery: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    canceledAt: PropTypes.string,
  }).isRequired,
};
