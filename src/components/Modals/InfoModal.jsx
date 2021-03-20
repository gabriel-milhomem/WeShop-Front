import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
import { Title } from './styles';
Modal.setAppElement('#root');

export default function InfoModal() {
  const { infoModal, setInfoModal } = useContext(AppContext);

  function handleCloseInfoModal() {
    setInfoModal(false);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={infoModal}
      onRequestClose={handleCloseInfoModal}
    >
      <Title> Revisar pedido </Title>
    </Modal>
  );
}
