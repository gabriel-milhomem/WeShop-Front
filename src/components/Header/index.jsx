import { useContext } from 'react';
import { IoStatsChart } from 'react-icons/io5';

import logoImg from '../../assets/logo.png';
import AppContext from '../../contexts/AppContext';
import { StyledHeader, Content, LeftBox, RightBox, ShowPurchases, Brand, IconRefresh } from './styles';

export function Header() {
  const { showOrders, setShowOrders } = useContext(AppContext);

  return (
    <StyledHeader>
      <Content>
        <LeftBox>
          <img src={logoImg} alt="Logo do WeShop" />
          <Brand> WeShop </Brand>
        </LeftBox>
        <RightBox>
          <IconRefresh />
          <ShowPurchases onClick={() => setShowOrders(!showOrders)}>
            <h2> Pedidos </h2>
            <IoStatsChart />
          </ShowPurchases>
        </RightBox>
      </Content>
    </StyledHeader>
  );
}
