import styled from 'styled-components';

import { mediaMobile } from '../../utils/media';

export const StyledSummary = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  max-width: 1120px;
  width: 95%;
  margin: -4.5rem auto 0 auto;

  ${mediaMobile} {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      width: 0px;
    }

    width: 100%;
    padding-left: 1rem;
  }
`;
