/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdEye } from 'react-icons/io';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import { Container, DeliveriesList, DeliveryItem, Modal } from './styles';

import CreateButton from '../../components/CreateButton';
import DefaultAvatar from '../../components/DefaultAvatar';
import DeliveryStatus from '../../components/DeliveryStatus';
import ActionsDropdown from '../../components/ActionsDropdown';

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
  const [openDeliveryActionsId, setOpenDeliveryActionsId] = useState(0);
  const [openModal, setOpenModal] = useState(!true);
  const [modalDelivery, setModalDelivery] = useState({});

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries', {
        params: {
          q: productQuery,
        },
      });

      const data = response.data.map(delivery => {
        const d = {
          ...delivery,
          formattedStartDate: format(
            new Date(delivery.startDate),
            'dd/MM/yyyy'
          ),
          formattedEndDate: format(new Date(delivery.endDate), 'dd/MM/yyyy'),
        };

        return d;
      });

      setDeliveries(data);
    }

    loadDeliveries();
  }, [productQuery]);

  function handleProductQueryChange(event) {
    setProductQuery(event.target.value);
  }

  function toggleActionsModalVisibility(delivery) {
    if (delivery.id === openDeliveryActionsId) {
      setOpenDeliveryActionsId(0);
    } else {
      setOpenDeliveryActionsId(delivery.id);
    }
  }

  function handleView(delivery) {
    setModalDelivery(delivery);
    setOpenModal(true);
  }

  function handleEdit(delivery) {
    history.push(`/deliveries/${delivery.id}`, {
      state: { delivery },
    });
  }

  async function handleDelete(deliveryId) {
    const yes = window.confirm(
      `Tem certeza que deseja remover a encomenda #${deliveryId}?`
    );

    if (yes) {
      api.delete(`/deliveries/${deliveryId}`);

      setDeliveries(deliveries.filter(d => d.id !== deliveryId));
    }
  }

  return (
    <>
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
          <div className="header">
            <div>ID</div>
            <div>Destinatário</div>
            <div>Entregador</div>
            <div>Cidade</div>
            <div>Estado</div>
            <div>Status</div>
            <div className="actions">Ações</div>
          </div>

          <ul>
            {deliveries.map((d, index) => (
              // https://dmitripavlutin.com/use-react-memo-wisely/
              <DeliveryItem key={`delivery-${d.id}`}>
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
                  <div className="dropdown">
                    <FiMoreHorizontal
                      size={16}
                      color="#666"
                      onClick={() => toggleActionsModalVisibility(d)}
                    />
                    <ActionsDropdown open={d.id === openDeliveryActionsId}>
                      <li onClick={() => handleView(d)}>
                        <IoMdEye size={15} color="#8E5BE8" />
                        <span>Visualizar</span>
                      </li>
                      <li onClick={() => handleEdit(d)}>
                        <MdEdit size={16} color="#4D85EE" /> <span>Editar</span>
                      </li>
                      <li onClick={() => handleDelete(d.id)}>
                        <MdDeleteForever size={16} color="#DE3B3B" />
                        <span>Excluir</span>
                      </li>
                    </ActionsDropdown>
                  </div>
                </div>
              </DeliveryItem>
            ))}
          </ul>
        </DeliveriesList>
      </Container>

      {/* Parece meio redundante e ineficiente */}
      {openModal && (
        <Modal open={openModal} close={() => setOpenModal(false)}>
          <section>
            <p>
              <strong>Informações da encomenda</strong>
            </p>
            <p> {modalDelivery.recipient.city} </p>
            <p> {modalDelivery.recipient.state} </p>
            <p> {modalDelivery.recipient.cep} </p>
          </section>
          <section>
            <p>
              <strong>Datas</strong>
            </p>
            <p>
              <span>Retirada: </span> {modalDelivery.formattedStartDate}
            </p>
            <p>
              <span>Entrega: </span>
              {modalDelivery.formattedEndDate}
            </p>
          </section>
          <section>
            <p>
              <strong>Assinatura do destinatário</strong>
              {modalDelivery.signature ? (
                <img
                  src={modalDelivery.signature}
                  alt="assinatura da entrega"
                />
              ) : (
                <>
                  <br />
                  <span> Essa entrega ainda não possui assinatura </span>
                </>
              )}
            </p>
          </section>
        </Modal>
      )}
    </>
  );
}
