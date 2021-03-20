import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
Modal.setAppElement('#root');

export function ClientModal() {
  const { clientModal, setClientModal } = useContext(AppContext);

  function handleOpenClientModal() {
    setClientModal(true);
  }

  function handleCloseClientModal() {
    setClientModal(false);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={clientModal}
      onRequestClose={handleCloseClientModal}
    >
      <h1> Cadastrar cliente </h1>
    </Modal>
  );
}
