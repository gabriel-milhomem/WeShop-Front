import { useContext, useState } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
import { success } from '../../libs/notify';
import api from '../../services/api';
import Button from './Button';
import Error from './Error';
import Input from './Input';
import { Title } from './styles';

Modal.setAppElement('#root');

export default function ProductModal() {
  const { productModal, setProductModal } = useContext(AppContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  function handleCloseProductModal() {
    setProductModal(!productModal);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (disabled) return;
      setDisabled(true);

      const body = { name, price };
      await api.post('/products', body);

      success('Produto cadastrado com sucesso!');
      handleCloseProductModal();
    } catch (err) {
      console.error(err);
      setDisabled(false);

      setError(err.response.data.message);
    }
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={productModal}
      onRequestClose={handleCloseProductModal}
    >
      <form onSubmit={handleSubmit}>
        <Title> Cadastrar produto </Title>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={event => setName(event.target.value)}
          autoFocus
          required
        />
        <Input
          type="number"
          placeholder="Preço (R$)"
          value={price}
          onChange={event => setPrice(event.target.value)}
          required
        />
        <Error>{error || ''}</Error>
        <Button type="submit" disabled={disabled} isLoading={disabled}>
          {disabled ? '' : 'Cadastrar'}
        </Button>
      </form>
    </Modal>
  );
}
