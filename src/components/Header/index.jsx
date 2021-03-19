import React from 'react';

import logoImg from '../../assets/logo.png';
import logoutImg from '../../assets/logout.svg';
import {
  StyledHeader,
  Content,
  LeftBox,
  LogoutButton,
  Brand,
  LogoutIcon
} from './styles';

export function Header() {
  return (
    <StyledHeader>
      <Content>
        <LeftBox>
          <img src={logoImg} alt="Logo do WeShop" />
          <Brand> WeShop </Brand>
        </LeftBox>
        <LogoutButton>
          <h2> Sair </h2>
          <LogoutIcon src={logoutImg} alt="Icone de sair" />
        </LogoutButton>
      </Content>
    </StyledHeader>
  );
}
