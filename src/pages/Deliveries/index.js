import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import api from '../../services/api';

import { Container, DeliveriesList } from './styles';

import CreateButton from '../../components/CreateButton';
import DefaultAvatar from '../../components/DefaultAvatar';
import DeliveryStatus from '../../components/DeliveryStatus';

const colors = [
  '#A28FD0',
  '#CB946C',
  '#83CEC9',
  '#CC7584',
  '#A8D080',
  '#CCCC8B',
];

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [productQuery, setProductQuery] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries', {
        params: {
          q: productQuery,
        },
      });

      setDeliveries(
        response.data.map(delivery => ({
          ...delivery,
          formattedStartDate: 'a',
          formattedEndDate: 'b',
          formattedCanceledAt: 'c',
        }))
      );
    }

    loadDeliveries();
  }, [productQuery]);

  function handleProductQueryChange(event) {
    setProductQuery(event.target.value);
  }

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>

      <div>
        <input
          type="text"
          placeholder="Buscar por encomendas"
          value={productQuery}
          onChange={handleProductQueryChange}
        />
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
          {deliveries.map((d, index) => (
            <li className="row" key={`delivery-${d.id}`}>
              <div> #{d.id} </div>
              <div> {d.recipient.name} </div>
              <div className="avatar">
                {d.deliveryman.avatar ? (
                  <img // aí vem a URL do avatar
                    src="https://api.adorable.io/avatars/40/abott@adorable.png"
                    alt="imagem de perfil"
                  />
                ) : (
                  <DefaultAvatar
                    initials={d.deliveryman.name[0]}
                    color={colors[index % colors.length]}
                  />
                )}
                <span>{d.deliveryman.name}</span>
              </div>
              <div> {d.recipient.city} </div>
              <div> {d.recipient.state} </div>
              <div className="status">
                <DeliveryStatus delivery={d} />
              </div>
              <div className="actions">
                <FiMoreHorizontal size={16} color="#666" />
              </div>
            </li>
          ))}
        </ul>
      </DeliveriesList>
    </Container>
  );
}
