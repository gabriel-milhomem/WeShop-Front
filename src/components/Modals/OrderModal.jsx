import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
import { Title } from './styles';
Modal.setAppElement('#root');

export default function OrderModal() {
  const { orderModal, setOrderModal } = useContext(AppContext);

  function handleCloseOrderModal() {
    setOrderModal(!orderModal);
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
