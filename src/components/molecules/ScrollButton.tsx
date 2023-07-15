import React from 'react';
import { styled } from 'styled-components';
import arrow from '../../assets/arrowDown.png'

const ScrollButton: React.FC = () => {
  const scrollToSection = () => {
    const section = document.getElementById('mainSliderSection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button onClick={scrollToSection}>Explore Tours
     <ButtonImage />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 32px;
  font-family: 'Lato-Regular'
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
  position: absolute;
  transform: translate(45vw, 90vh)
`;

const ButtonImage = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 3px;
  background-image: url(${arrow});
  background-size: cover;
`;