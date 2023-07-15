import React from 'react';
import { Link } from 'react-router-dom';
import heartIcon from '../../assets/heart.png';
import styled from 'styled-components';

const FavouritesButton: React.FC = () => {
  return (
    <Link to="/#favorites">
      <Button>
      <HeartIcon src={heartIcon} alt='addToFavourites'/>
      </Button>
    </Link>
  );
};

export default FavouritesButton;

export const Button = styled.button`
  background-color: white;
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
    background-color: #f2f2f2;
     }
`;

export const HeartIcon = styled.img`
  width: 15px
`