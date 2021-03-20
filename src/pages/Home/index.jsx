import { useContext } from 'react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { ShoppingTable } from '../../components/ShoppingTable';
import AppContext from '../../contexts/AppContext';
import { StyledSummary, Dashboard } from './styles';

export function Home() {
  const {
    clientModal,
    productModal,
    infoModal,
    orderModal,
    setClientModal,
    setProductModal,
    setOrderModal
  } = useContext(AppContext);

  return (
    <>
      <Header />
      <Dashboard>
        <StyledSummary>
          <Card
            title="Cadastrar"
            subtitle="Cliente"
            iconType="client"
            onClick={e => {
              console.log(e);
              setClientModal(!clientModal);
            }}
          />
          <Card
            title="Cadastrar"
            subtitle="Produto"
            iconType="product"
            onClick={() => setProductModal(!productModal)}
          />
          <Card
            title="Cadastrar"
            subtitle="Pedido"
            iconType="purchase"
            backColor
            onClick={() => setOrderModal(!orderModal)}
          />
        </StyledSummary>

        <ShoppingTable />
      </Dashboard>
    </>
  );
}
