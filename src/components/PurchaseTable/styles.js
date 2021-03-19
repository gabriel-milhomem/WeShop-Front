import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 3rem;
  width: 100%;

  border-spacing: 0 0.5rem;
`;

export const Head = styled.thead`
  th {
    text-align: left;
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
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    background: var(--shape);
    line-height: 1.5rem;
    border: 0;

    &:first-child {
      color: var(--title-color);
    }

    &::nth-child(3) {
      color: var(--green) !important;
    }
  }
`;
