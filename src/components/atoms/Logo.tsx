import React from 'react';
import logo from '../../assets/logo.png'
import { styled } from 'styled-components';

const Logo: React.FC = () => {
  return (
    <div>
      <Img src={logo} alt='logo'></Img>
    </div>
  );
};

export default Logo;

const Img = styled.img`
  width: 250px
`