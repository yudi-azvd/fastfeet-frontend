import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import api from '../../services/api';

import { Container, DeliveriesList } from './styles';

import CreateButton from '../../components/CreateButton';

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
        <CreateButton link="/deliveries/new" />
      </div>

      <DeliveriesList>
        <div className="row">
          <div>ID</div>
          <div>Destinatário</div>
          <div>Recipiente</div>
          <div>Cidade</div>
          <div>Estado</div>
          <div>Status</div>
          <div className="actions">Ações</div>
        </div>

        <ul>
          {deliveries.map(d => (
            <li className="row" key={`delivery-${d.id}`}>
              <div> #{d.id} </div>
              <div> {d.recipient.name} </div>
              <div className="avatar">
                <img
                  src="https://api.adorable.io/avatars/40/abott@adorable.png"
                  alt="imagem de perfil"
                />
                <span>{d.deliveryman.name}</span>
              </div>
              <div> {d.recipient.city} </div>
              <div> {d.recipient.state} </div>
              {/* status é calculado! */}
              <div> status</div>
              <div className="actions">
                {/* <button type="button"> */}
                <FiMoreHorizontal size={16} color="#666" />
                {/* </button> */}
              </div>
            </li>
          ))}
        </ul>
      </DeliveriesList>
    </Container>
  );
}
