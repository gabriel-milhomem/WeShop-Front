import React from 'react';
import CurrencyInput from 'react-currency-input';
import InputMask from 'react-input-mask';

import styled from 'styled-components';

export default function Input({ width, ...props }) {
  return <StyledInput {...props} />;
}

const StyledInput = styled(InputMask)`
  width: 100%;
  height: 3.5rem;
  background: #e7e9ee;
  outline: none;

  border: 2px solid #969cb3;
  border-radius: 0.25rem;
  color: #333333;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;

  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 0 5px #46a7d4;
    border: 1px solid #46a7d4;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
