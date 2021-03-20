import styled from 'styled-components';

import { mediaMobile } from '../../utils/media';

export const Container = styled.button`
  background: ${props => (props.backColor ? 'var(--green)' : 'var(--shape)')};
  padding: 1.5rem 2rem;
  color: ${props => (props.backColor ? '#fff' : 'var(--title-color)')};

  border-radius: 0.25rem;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  strong {
    text-align: left;
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${mediaMobile} {
    min-width: 300px;
    height: 180px;
  }
`;

export const TopLine = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 400;
  }

  svg {
    transform: scale(2);
  }
`;
