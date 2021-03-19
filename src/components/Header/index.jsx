import { IoStatsChart } from 'react-icons/io5';

import logoImg from '../../assets/logo.png';
import { StyledHeader, Content, LeftBox, ShowPurchases, Brand } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <Content>
        <LeftBox>
          <img src={logoImg} alt="Logo do WeShop" />
          <Brand> WeShop </Brand>
        </LeftBox>
        <ShowPurchases>
          <h2> Pedidos </h2>
          <IoStatsChart />
        </ShowPurchases>
      </Content>
    </StyledHeader>
  );
}
