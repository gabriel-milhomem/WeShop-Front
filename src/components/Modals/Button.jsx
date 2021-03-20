import React from 'react';
import Loader from 'react-loader-spinner';

import styled, { css } from 'styled-components';

export default function Button({ spinner, children, isLoading, ...props }) {
  return (
    <StyledButton isLoading={isLoading} {...props}>
      {isLoading ? (
        <SpinnerContainer>
          <Loader type="Oval" color="#33CC95" width={35} height={35} />
        </SpinnerContainer>
      ) : (
        <span>{children}</span>
      )}
    </StyledButton>
  );
}

const SpinnerContainer = styled.div`
  position: relative;
  top: 2.5px;
`;

const StyledButton = styled.button`
  border-radius: 0.25rem;
  background-color: ${({ isLoading }) =>
    isLoading ? '#FFFFFF' : 'var(--green)'};
  border: ${({ isLoading }) => (isLoading ? '3px solid var(--green)' : 'none')};

  color: #fff;
  font-size: 1.5rem;
  line-height: 1.5rem;

  width: 100%;
  height: 3rem;

  margin-bottom: 10px;

  text-align: center;
  position: relative;

  transition: background-color border color 0.5s linear;
  cursor: ${({ isLoading }) => (isLoading ? 'default' : 'pointer')};

  ${({ isLoading }) =>
    !isLoading &&
    css`
      &:hover,
      &:focus {
        background-color: #fff;
        color: var(--green);
        border: 3px solid var(--green);

        span {
          padding-right: 40px;

          &::after {
            opacity: 1;
            right: 0;
          }
        }
      }
    `}

  span {
    position: relative;
    transition: 0.4s linear;

    &::after {
      content: '»';
      position: absolute;
      font-size: 2.8rem;
      opacity: 0;
      top: 2px;
      right: -40px;
      transition: 0.2s linear;
    }
  }
`;
