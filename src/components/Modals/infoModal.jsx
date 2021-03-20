import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
Modal.setAppElement('#root');

export function InfoModal() {
  const { infoModal, setInfoModal } = useContext(AppContext);

  function handleOpenInfoModal() {
    setInfoModal(true);
  }

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
      <h1> Revisar pedido </h1>
    </Modal>
  );
}
