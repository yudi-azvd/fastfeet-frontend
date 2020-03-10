import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      <div>
        <input type="text" placeholder="Buscar por encomendas" />
        <button type="button">CADASTRAR</button>
      </div>

      <ul>
        {deliveries.map(d => (
          <li key={d.id}>
            <p> {d.id} </p>
            <p> {d.recipient.name} </p>
            <p> {d.deliveryman.name} </p>
            <p> {d.recipient.city} </p>
            <p> {d.recipient.state} </p>
            <p> {d.status} </p>
            <p> {d.id} </p>
            <hr />
          </li>
        ))}
      </ul>
    </Container>
  );
}
