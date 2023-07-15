import React from 'react';
import { styled } from 'styled-components';

const SliderTitle: React.FC = () => {
  return (
    <div>
      <Title>POPULAR TOURS</Title>
    </div>
  );
};

export default SliderTitle;

const Title = styled.p`
  font-family: 'Syne-Extrabold', sans-serif;
  font-size: 32px;
`