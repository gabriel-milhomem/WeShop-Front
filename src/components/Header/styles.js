import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  width: 95%;
  margin: 0 auto;

  padding-top: 2rem;
  padding-bottom: 8rem;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled(LeftBox).attrs({ as: 'button' })`
  cursor: pointer;
  transition: filter 0.2s;
  background: var(--blue-light);

  border-radius: 0.25rem;
  height: 2.8rem;
  padding: 0 1.5rem;

  &:hover {
    filter: brightness(0.9);
  }

  h2 {
    color: #fff;
    margin-right: 1.25rem;
    font-size: 1.2rem;
  }
`;

export const Brand = styled.h1`
  font-family: var(--font-saira);
  color: #fff;
  margin-left: 1rem;
  font-size: 2rem;
`;

export const LogoutIcon = styled.img`
  color: #ffffff;
  transform: scale(0.95);
  position: relative;
  bottom: 2px;
`;
