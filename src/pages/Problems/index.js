/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdDeleteForever, MdVisibility } from 'react-icons/md';

import api from '../../services/api';

import { Container, ProblemItem } from './styles';
import ActionsDropdown from '../../components/ActionsDropdown';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [openProblemIdActions, setOpenProblemIdActions] = useState(0);

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

  function handleView() {}

  function handleDelete() {}

  return (
    <Container>
      <h1>Problemas nas entregas</h1>

      <div className="header">
        <div>ID</div>
        <div>Descrição</div>
        <div className="actions">Ações</div>
      </div>

      <ul>
        {problems.map(p => (
          <ProblemItem key={p.id}>
            <div>#{p.id}</div>
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
                  <li onClick={() => handleDelete(p.id)}>
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
  );
}
