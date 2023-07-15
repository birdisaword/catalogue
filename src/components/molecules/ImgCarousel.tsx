import React from 'react';
import styled from 'styled-components';
import { ImgCarouselProps } from '../states';

const ImgCarousel: React.FC<ImgCarouselProps> = ({ currentSlide, handleSlideChange }) => {
  return (
    <CarouselButtonGroup>
      <CarouselButton onClick={() => handleSlideChange(0)} active={currentSlide === 0} />
      <CarouselButton onClick={() => handleSlideChange(1)} active={currentSlide === 1} />
      <CarouselButton onClick={() => handleSlideChange(2)} active={currentSlide === 2} />
    </CarouselButtonGroup>
  );
};

export default ImgCarousel;

const CarouselButtonGroup = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-140%, -1400%);
`;

const CarouselButton = styled.button<{ active?: boolean }>`
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
};`