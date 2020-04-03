/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container, DeliverymenList, DeliverymanItem } from './styles';

import CreateButton from '../../components/CreateButton';
import MiniDefaultAvatar from '../../components/MiniDefaultAvatar';
import ActionsDropdown from '../../components/ActionsDropdown';

const colors = [
  '#A28FD0',
  '#CB946C',
  '#83CEC9',
  '#CC7584',
  '#A8D080',
  '#CCCC8B',
];

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [deliverymanQuery, setDeliverymanQuery] = useState('');
  const [openDeliverymanActionsId, setOpenDeliverymanActionsId] = useState(0);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get(`/deliverymen?q=${deliverymanQuery}`);
      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, [deliverymanQuery]);

  function handleDeliverymanQueryChange(event) {
    setDeliverymanQuery(event.target.value);
  }

  function toggleActionsModalVisibility(deliveryman) {
    if (deliveryman.id === openDeliverymanActionsId) {
      setOpenDeliverymanActionsId(0);
    } else {
      setOpenDeliverymanActionsId(deliveryman.id);
    }
  }

  function handleEdit(deliverymanId) {
    history.push(`/deliverymen/${deliverymanId}/edit`);
  }

  async function handleDelete(deliveryman) {
    const yes = window.confirm(
      `Tem certeza que deseja remover ${deliveryman.name}?`
    );

    if (yes) {
      api.delete(`/deliverymen/${deliveryman.id}`);

      setDeliverymen(deliverymen.filter(d => d.id !== deliveryman.id));
    }
  }

  return (
    <Container>
      <h1>Gerenciando entregadores</h1>

      <div>
        <input
          type="text"
          placeholder="Buscar por entregadores"
          value={deliverymanQuery}
          onChange={handleDeliverymanQueryChange}
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
            <DeliverymanItem key={`deliveryman-${d.id}`}>
              <div> #{d.id} </div>
              <div className="avatar">
                {d.avatar ? (
                  <img // aí vem a URL do avatar
                    src="https://api.adorable.io/avatars/40/abott@adorable.png"
                    alt="imagem de perfil"
                  />
                ) : (
                  <MiniDefaultAvatar
                    initials={d.name[0]}
                    color={colors[index % colors.length]}
                  />
                )}
              </div>
              <div>
                <span>{d.name} </span>
              </div>
              <div> {d.email} </div>
              <div className="actions">
                <div className="dropdown">
                  <FiMoreHorizontal
                    size={16}
                    color="#666"
                    onClick={() => toggleActionsModalVisibility(d)}
                  />
                  <ActionsDropdown open={d.id === openDeliverymanActionsId}>
                    <li onClick={() => handleEdit(d.id)}>
                      <MdEdit size={15} color="#8E5BE8" />
                      <span>Editar</span>
                    </li>
                    <li onClick={() => handleDelete(d)}>
                      <MdDeleteForever size={15} color="#DE3B3B" />
                      <span>Exlcuir</span>
                    </li>
                  </ActionsDropdown>
                </div>
              </div>
            </DeliverymanItem>
          ))}
        </ul>
      </DeliverymenList>
    </Container>
  );
}
