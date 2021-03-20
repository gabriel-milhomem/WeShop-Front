import { useContext } from 'react';

import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { ShoppingTable } from '../../components/ShoppingTable';
import AppContext from '../../contexts/AppContext';
import { StyledSummary, Dashboard } from './styles';

export function Home() {
  const { setClientModal, setProductModal, setOrderModal } = useContext(
    AppContext
  );

  return (
    <>
      <Header />
      <Dashboard>
        <StyledSummary>
          <Card
            title="Cadastrar"
            subtitle="Cliente"
            iconType="client"
            onClick={() => {
              console.log('alou');
              setClientModal(true);
            }}
          />
          <Card
            title="Cadastrar"
            subtitle="Produto"
            iconType="product"
            onClick={() => setProductModal(true)}
          />
          <Card
            title="Cadastrar"
            subtitle="Pedido"
            iconType="purchase"
            backColor
            onClick={() => setOrderModal(true)}
          />
        </StyledSummary>

        <ShoppingTable />
      </Dashboard>
    </>
  );
}
