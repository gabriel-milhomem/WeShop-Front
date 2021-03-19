import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { PurchaseTable } from '../../components/PurchaseTable';
import { StyledSummary, Dashboard } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Dashboard>
        <StyledSummary>
          <Card title="Cadastrar" subtitle="Cliente" iconType="client" />
          <Card title="Cadastrar" subtitle="Produto" iconType="product" />
          <Card
            title="Cadastrar"
            subtitle="Pedido"
            iconType="purchase"
            backColor
          />
        </StyledSummary>

        <PurchaseTable />
      </Dashboard>
    </>
  );
}
