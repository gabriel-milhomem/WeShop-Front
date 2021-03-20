import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 3rem;
  width: 100%;

  border-spacing: 0 0.5rem;
  font-size: 1.05rem;

  svg {
    transform: scale(1.5);
    color: var(--blue);
    cursor: pointer;
  }
`;

export const Head = styled.thead`
  th {
    text-align: center;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 1rem 2rem;
    color: var(--title-color);
  }

  tr {
    background: transparent;
  }
`;

export const Body = styled.tbody`
  td {
    text-align: center;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    background: var(--shape);
    line-height: 1.5rem;
    border: 0;

    &:nth-child(2) {
      color: var(--title-color);
    }

    &:nth-child(4) {
      color: var(--green);
    }
  }
`;
