import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
Modal.setAppElement('#root');

export function OrderModal() {
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
      <h1> Fazer pedido </h1>
    </Modal>
  );
}
