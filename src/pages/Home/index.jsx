import { useState } from 'react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import ClientModal from '../../components/Modals/ClientModal';
import InfoModal from '../../components/Modals/InfoModal';
import OrderModal from '../../components/Modals/OrderModal';
import ProductModal from '../../components/Modals/ProductModal';
import { ShoppingTable } from '../../components/ShoppingTable';
import { StyledSummary, Dashboard } from './styles';

export function Home() {
  const [infoModal, setInfoModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  const handleOpenInfoModal = () => setInfoModal(true);
  const handleOpenClientModal = () => setClientModal(true);
  const handleOpenProductModal = () => setProductModal(true);
  const handleOpenOrderModal = () => setOrderModal(true);

  const handleCloseInfoModal = () => setInfoModal(false);
  const handleCloseClientModal = () => setClientModal(false);
  const handleCloseProductModal = () => setProductModal(false);
  const handleCloseOrderModal = () => setOrderModal(false);

  return (
    <>
      <Header />
      <Dashboard>
        <StyledSummary>
          <Card
            id="client"
            title="Cadastrar"
            subtitle="Cliente"
            iconType="client"
            openModal={handleOpenClientModal}
          />
          <ClientModal
            isOpen={clientModal}
            onRequestClose={handleCloseClientModal}
          />
          <Card
            title="Cadastrar"
            subtitle="Produto"
            iconType="product"
            openModal={handleOpenProductModal}
          />
          <ProductModal
            isOpen={productModal}
            onRequestClose={handleCloseProductModal}
          />
          <Card
            title="Cadastrar"
            subtitle="Pedido"
            iconType="order"
            backColor
            openModal={handleOpenOrderModal}
          />
          <OrderModal
            isOpen={orderModal}
            onRequestClose={handleCloseOrderModal}
          />
        </StyledSummary>

        <ShoppingTable
          onOpenOrderModal={handleOpenOrderModal}
          onOpenInfoModal={handleOpenInfoModal}
        />
        <InfoModal isOpen={infoModal} onRequestClose={handleCloseInfoModal} />
      </Dashboard>
    </>
  );
}
