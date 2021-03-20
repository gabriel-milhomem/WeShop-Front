import { useContext, useState } from 'react';
import { IoStatsChart } from 'react-icons/io5';

import axios from 'axios';

import logoImg from '../../assets/logo.png';
import AppContext from '../../contexts/AppContext';
import { error } from '../../libs/notify';
import {
  StyledHeader,
  Content,
  LeftBox,
  RightBox,
  ShowPurchases,
  Brand,
  IconRefresh
} from './styles';

export function Header() {
  const { showOrders, setShowOrders, setOrders, setLoading } = useContext(
    AppContext
  );
  const [disabled, setDisabled] = useState(false);

  async function getOrders() {
    if (disabled) return;
    setDisabled(true);
    setLoading(true);

    try {
      const { data } = await axios.get('http://localhost:3000/api/orders');

      console.log(data);
      setOrders([...data]);
      setLoading(false);
      setDisabled(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setDisabled(false);
      error(err.response.data.message);
    }
  }

  return (
    <StyledHeader>
      <Content>
        <LeftBox>
          <img src={logoImg} alt="Logo do WeShop" />
          <Brand> WeShop </Brand>
        </LeftBox>
        <RightBox>
          <IconRefresh
            disabled={disabled}
            onClick={async () => {
              if (showOrders === false) return;

              await getOrders();
            }}
          />
          <ShowPurchases
            type="button"
            disabled={showOrders}
            onClick={async () => {
              await getOrders();
              setShowOrders(true);
            }}
          >
            <h2> Pedidos </h2>
            <IoStatsChart />
          </ShowPurchases>
        </RightBox>
      </Content>
    </StyledHeader>
  );
}
