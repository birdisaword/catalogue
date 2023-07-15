import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignInButton: React.FC = () => {
  return (
    <StyledBtn to="#">
      <Button>
        <StyledText>SIGN IN</StyledText>
      </Button>
    </StyledBtn>
  );
};

export default SignInButton;

export const Button = styled.button`
  background-color: #D3EAFF;
  width: 90px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
   &:active {
  transform: translateY(1px);
  background-color: #badeff;
   }
`;

export const StyledText = styled.p`
  text-decoration: none;
  color: black;
  font-family: 'SyneSemibold', sans-serif
`

export const StyledBtn = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: 'SyneSemibold', sans-serif;
  line-height: 28.8px
`

