import React from 'react';

import styled from 'styled-components';

export default function Error({ children, ...props }) {
  return (
    <StyledError {...props}>
      <p>{children}</p>
    </StyledError>
  );
}

const StyledError = styled.div`
  width: 100%;
  margin: 5px 0px;

  p {
    color: var(--red);
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: center;
  }
`;
