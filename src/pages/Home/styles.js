import styled from 'styled-components';

import { mediaMobile } from '../../utils/media';

export const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -4.5rem;

  ${mediaMobile} {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0px;
    }

    width: 100%;
    padding-left: 1rem;
  }
`;

export const Dashboard = styled.main`
  max-width: 1120px;
  width: 95%;

  margin: 0 auto;
`;
