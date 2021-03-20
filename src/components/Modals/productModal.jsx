import { useContext } from 'react';
import Modal from 'react-modal';

import AppContext from '../../contexts/AppContext';
Modal.setAppElement('#root');

export function ProductModal() {
  const { productModal, setProductModal } = useContext(AppContext);

  function handleOpenProductModal() {
    setProductModal(true);
  }

  function handleCloseProductModal() {
    setProductModal(false);
  }

  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={productModal}
      onRequestClose={handleCloseProductModal}
    >
      <h1> Cadastrar produto </h1>
    </Modal>
  );
}
