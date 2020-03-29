import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, DeliverymenList } from './styles';

import CreateButton from '../../components/CreateButton';
import DefaultAvatar from '../../components/DefaultAvatar';
import ActionsDropdown from '../../components/ActionsDropdown';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('/deliverymen');
      setDeliverymen(response.data);
    }

    loadDeliverymen();
  });

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <div>
        <input
          type="text"
          placeholder="Buscar por entregadores"
          // value={productQuery}
          // onChange={handleProductQueryChange}
        />
        <CreateButton link="/deliverymen/new" />
      </div>

      <DeliverymenList>
        <div className="header">
          <div>ID</div>
          <div>Foto</div>
          <div>Nome</div>
          <div>Email</div>
          <div className="actions">Ações</div>
        </div>

        <ul>
          {deliverymen.map((d, index) => (
            <li key={`deliverymen-${d.id}`}>
              <div> #{d.id} </div>
              <div> {d.avatar} </div>
              <div> {d.name} </div>
              <div> {d.email} </div>
            </li>
          ))}
        </ul>
      </DeliverymenList>
    </Container>
  );
}
