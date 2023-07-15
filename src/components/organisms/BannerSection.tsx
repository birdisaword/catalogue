import React, { useState } from 'react';
import { styled } from 'styled-components';
import NavigationMenu from './NavigationMenu';
import ScrollButton from '../molecules/ScrollButton';
import { Title } from './FavouritesSection';
import ImgCarousel from '../molecules/ImgCarousel';
import Image1 from '../../assets/1.png';
import Image2 from '../../assets/2.png';
import Image3 from '../../assets/3.png';

 const BannerSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Div backgroundImage={images[currentSlide]}>
      <NavigationMenu />
      <SmallTitle>THE SPACE IS WAITING FOR</SmallTitle>
      <BigTitle>YOU</BigTitle>
      <ImgCarousel currentSlide={currentSlide} handleSlideChange={handleSlideChange} />
      <ScrollButton />
    </Div>
  );
};

const Div = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 30, 30, 0.478);
  }
`;

const SmallTitle = styled(Title)`
  transform: translate(10vw, 200px);
`;

const BigTitle = styled(Title)`
  transform: translate(10vw, 50px);
  font-size: 310px;
`;

export const CarouselButtonGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CarouselButton = styled.button<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#aaa' : '#ccc')};
  margin: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:focus {
    outline: none;
  }
`;

export default BannerSection;