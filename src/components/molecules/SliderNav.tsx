import React from 'react';
import SliderTitle from '../atoms/SliderTitle';
import SliderButton from './SliderButton';
import { styled } from 'styled-components';
import { SliderButtonProps } from '../states';

const SliderNav: React.FC<SliderButtonProps> = ({ rockets, galleryRef }) => {
  return (
    <Div>
      <SliderTitle />
      <SliderButton rockets={rockets} galleryRef={galleryRef} />
    </Div>
  );
};

export default SliderNav;

const Div = styled.div`
  margin: 40px 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px
`;
