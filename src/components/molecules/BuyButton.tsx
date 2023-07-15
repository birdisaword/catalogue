import React from 'react';
import { Button } from './SignInButton';
import { StyledText } from './SignInButton';
import { StyledBtn } from './SignInButton';
import { styled } from 'styled-components';

const BuyButton: React.FC = () => {
  return (
    <StyledBtn to="#">
      <StyledBuyButton>
        <StyledText>BUY</StyledText>
      </StyledBuyButton>
    </StyledBtn>
  );
};

export default BuyButton;

const StyledBuyButton = styled(Button)`
  width: 300px;
`
