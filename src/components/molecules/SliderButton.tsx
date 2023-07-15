import React from 'react';
import { styled } from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SliderButtonProps } from '../states';

const SliderButton: React.FC<SliderButtonProps> = ({ galleryRef, rockets }) => {
  const handleScrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -500,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: 500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <ButtonWrapper>
      <ScrollButton onClick={handleScrollLeft}>
        <FiChevronLeft />
      </ScrollButton>
      <ScrollButton onClick={handleScrollRight}>
        <FiChevronRight />
      </ScrollButton>
    </ButtonWrapper>
  );
};

export default SliderButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ScrollButton = styled.button`
  background-color: #ECECEC;
  border: none;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;
