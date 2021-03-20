import { useState } from 'react';
import Modal from 'react-modal';

import { success } from '../../libs/notify';
import api from '../../services/api.js';
import Button from './Button';
import Error from './Error';
import Input from './Input';
import { Title } from './styles';

export default function ClientModal({ isOpen, onRequestClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      if (disabled) return;
      setDisabled(true);

      if (name.split(' ').length === 1) {
        setError('Digite o nome completo');
        setDisabled(false);

        return;
      }

      const body = { name, email, phone, birthDate };
      await api.post('/clients', body);

      success('Cliente cadastrado com sucesso!');
    } catch (err) {
      console.error(err);
      setDisabled(false);

      if (err.response.data.details === 'Data inválida') {
        setError(err.response.data.details);
        return;
      }
      setError(err.response.data.message);
    }
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Title> Cadastrar cliente </Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
          autoFocus
          pattern="^[A-z\u00C0-\u00ff ]+$"
          title="Digite nome e sobrenome"
          required
        />
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={event => setPhone(event.target.value)}
          mask="(99) 99999-9999"
          required
        />
        <Input
          type="text"
          placeholder="Data de nascimento"
          value={birthDate}
          onChange={event => setBirthDate(event.target.value)}
          mask="99/99/9999"
          required
        />
        <Error>{error || ''}</Error>
        <Button type="submit" disabled={disabled} isLoading={disabled}>
          {disabled ? '' : 'cadastrar'}
        </Button>
      </form>
    </Modal>
  );
}
