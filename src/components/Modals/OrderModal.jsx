import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
import { Title } from './styles';
Modal.setAppElement('#root');

export default function OrderModal() {
  const { orderModal, setOrderModal } = useContext(AppContext);

  function handleOpenOrderModal() {
    setOrderModal(true);
  }

  function handleCloseOrderModal() {
    setOrderModal(false);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={orderModal}
      onRequestClose={handleCloseOrderModal}
    >
      <Title> Fazer pedido </Title>
    </Modal>
  );
}
