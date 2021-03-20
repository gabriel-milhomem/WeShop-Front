import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--title-color);
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: left;
  margin: 0.5rem 0;
`;

export const Subtitle = styled(Title).attrs({ as: 'h2' })`
  font-size: 1.25;
`;

export const InfoSection = styled.section`
  max-height: 440px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: var(--background);
  }

  &::-webkit-scrollbar-track-piece {
    display: none;
  }
`;

export const List = styled.ul`
  margin: 0.5rem 0;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    display: inline-block;
    color: var(--title-color);
  }
`;

export const Total = styled.h3`
  font-size: 1.25rem;
  color: var(--green);
`;

export const LastLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MathPrice = styled.span`
  font-size: 0.9rem;
  color: var(--text-color);
`;
