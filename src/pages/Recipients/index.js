/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { Container, RecipientList, RecipientItem } from './styles';

import CreateButton from '../../components/CreateButton';
import ActionsDropdown from '../../components/ActionsDropdown';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [recipientQuery, setRecipientQuery] = useState('');
  const [openRecipientIdActions, setOpenRecipientIdActions] = useState(0);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      setRecipients(
        response.data.map(r => ({
          ...r,
          address: `${r.state}, ${r.city}, ${r.street}, ${r.number}`,
        }))
      );
    }

    loadRecipients();
  }, []);

  function handleRecipientQueryChange(event) {
    setRecipientQuery(event.target.value);
  }

  function toggleActionsVisibility(recipientId) {
    if (recipientId === openRecipientIdActions) {
      setOpenRecipientIdActions(0);
    } else {
      setOpenRecipientIdActions(recipientId);
    }
  }

  function handleEdit(recpientId) {
    history.push(`/recipients/${recpientId}/edit`);
  }

  function handleDelete(recipient) {
    const yes = window.confirm(
      `Tem certeza que deseja remover o destinatário ${recipient.name} (#${recipient.id})?`
    );

    if (yes) {
      try {
        api.delete(`/recipients/${recipient.id}`);
        setRecipients(recipients.filter(r => r.id !== recipient.id));
        toast.success('Destinatário removido com sucessso!');
      } catch (error) {
        toast.error('Erro ao remover destinatário.');
      }
    }
  }

  return (
    <Container>
      <h1>Gerenciando destinatários</h1>

      <div>
        <input
          type="text"
          placeholder="Buscar por destinatários"
          value={recipientQuery}
          onChange={handleRecipientQueryChange}
        />
        <CreateButton link="/recipients/new" />
      </div>

      <RecipientList>
        <div className="header">
          <div>ID</div>
          <div>Nome</div>
          <div>Endereço</div>
          <div className="actions">Ações</div>
        </div>

        <ul>
          {recipients.map(r => (
            <RecipientItem key={`rec-${r.id}`}>
              <div> {r.id} </div>
              <div> {r.name} </div>
              <div className="address">
                <p>{r.address} </p>
              </div>
              <div className="actions">
                <div className="dropdown">
                  <FiMoreHorizontal
                    size={16}
                    color="#666"
                    onClick={() => toggleActionsVisibility(r.id)}
                  />
                  <ActionsDropdown open={r.id === openRecipientIdActions}>
                    <li onClick={() => handleEdit(r.id)}>
                      <MdEdit size={16} color="#4D85EE" /> <span>Editar</span>
                    </li>
                    <li onClick={() => handleDelete(r)}>
                      <MdDeleteForever size={16} color="#DE3B3B" />
                      <span>Excluir</span>
                    </li>
                  </ActionsDropdown>
                </div>
              </div>
            </RecipientItem>
          ))}
        </ul>
      </RecipientList>
    </Container>
  );
}
