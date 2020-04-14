/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, ProblemItem, Modal } from './styles';
import ActionsDropdown from '../../components/ActionsDropdown';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [openProblemIdActions, setOpenProblemIdActions] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalRecipient, setModalRecipient] = useState({});

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('/delivery-problems');
      setProblems(response.data);
    }

    loadProblems();
  }, []);

  function toggelActionsVisibility(id) {
    if (id === openProblemIdActions) {
      setOpenProblemIdActions(0);
    } else {
      setOpenProblemIdActions(id);
    }
  }

  function handleView(p) {
    setOpenModal(true);
    setModalRecipient(p);
  }

  async function handleDelete(deliveryId) {
    const yes = window.confirm(
      `Tem certeza que deseja cancelar a entrega #${deliveryId}?`
    );

    if (yes) {
      await api.delete(`/problem/${deliveryId}/cancel-delivery`);

      // setProblems(problems.filter(d => d.id !== problemId));

      toast.success('Entrega cancelada com sucesso!');
    }
  }

  return (
    <>
      <Container>
        <h1>Problemas nas entregas</h1>

        <div className="header">
          <div>Encomenda</div>
          <div>Descrição</div>
          <div className="actions">Ações</div>
        </div>

        <ul>
          {problems.map(p => (
            <ProblemItem key={p.id}>
              <div>#{p.delivery_id}</div>
              <div>
                <p>{p.description}</p>
              </div>
              <div className="actions">
                <div className="dropdown">
                  <FiMoreHorizontal
                    size={16}
                    color="#666"
                    onClick={() => toggelActionsVisibility(p.id)}
                  />
                  <ActionsDropdown open={p.id === openProblemIdActions}>
                    <li onClick={() => handleView(p)}>
                      <MdVisibility size={15} color="#8E5BE8" />
                      <span>Visualizar</span>
                    </li>
                    <li onClick={() => handleDelete(p.delivery_id)}>
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      <span>Cancelar encomenda</span>
                    </li>
                  </ActionsDropdown>
                </div>
              </div>
            </ProblemItem>
          ))}
        </ul>
      </Container>

      {openModal && (
        <Modal open={openModal} close={() => setOpenModal(false)}>
          <h2>PROBLEMA</h2>
          <div>
            <p>{modalRecipient.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
}
