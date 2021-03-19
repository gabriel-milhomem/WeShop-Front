import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { StyledSummary } from './styles';

export function Home() {
  return (
    <main>
      <Header />
      <StyledSummary>
        <Card title="Criar" subtitle="Cliente" iconType="client" />
        <Card title="Criar" subtitle="Produto" iconType="product" />
        <Card title="Criar" subtitle="Pedido" iconType="order" backColor />
      </StyledSummary>
    </main>
  );
}
