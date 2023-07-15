import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { favoriteFlightsState } from '../states';
import { styled } from 'styled-components';
import BuyButton from '../molecules/BuyButton';
import { HeartIcon } from '../molecules/FavouritesButton';
import trashIcon from '../../assets/trash.png';
import { useRef } from 'react';
import NavigationMenu from './NavigationMenu';
import { GalleryWrapper, 
         Card, 
         CardImgContainer, 
         CardImg, 
         TextContainer, 
         TourContainer, 
         TourName, 
         DescriptionText, 
         ButtonWrapper, 
         FavButton } from './MainSliderSection';
import { Flight } from '../states';
import Image3 from '../../assets/3.png';


const FavoritesList: React.FC = () => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState<Flight[]>(favoriteFlightsState);
  const [newFlight, setNewFlight] = useState('');
  const [newFlightDescription, setNewFlightDescription] = useState('');
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleDeleteFlight = (flightId: string) => {
    setFavoriteFlights((prevFlights) =>
      prevFlights.filter((flight) => flight.id !== flightId)
    );
  };

  const handleClearAll = () => {
    setFavoriteFlights([]);
  };

  return (
    <Div>
      <Photo>
        <NavigationMenu />
        <Title>FAVOURITES</Title>
      </Photo>
      <ButtonWrapper>
        <ClearButton onClick={handleClearAll}>Clear all</ClearButton>
      </ButtonWrapper>
      <FavGalleryWrapper ref={galleryRef}>
        {favoriteFlights.map((flight) => (
          <Card key={flight.id}>
            <div>
              <CardImgContainer>
                <CardImg src={flight.image} alt={flight.name} />
              </CardImgContainer>
              <TourContainer>
                <TourName>{flight.name}</TourName>
                <TextContainer>
                  <DescriptionText>{flight.description}</DescriptionText>
                </TextContainer>
              </TourContainer>
              <ButtonWrapper>
                <BuyButton />
                <FavButton onClick={() => handleDeleteFlight(flight.id)}>
                  <HeartIcon src={trashIcon} alt='delete' />
                </FavButton>
              </ButtonWrapper>
            </div>
          </Card>
        ))}
      </FavGalleryWrapper>
    </Div>
  );
};

export default FavoritesList;

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;

const Photo = styled.div`
  font-family: 'Syne-Extrabold';
  width: 100%;
  height: 60vh;
  background-image: url(${Image3});
  background-size: cover;
  background-position: top;
  margin: 0;
  padding: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    background-color: rgba(30, 30, 30, 0.478);
  }
`;
export const Title = styled.h1`
  position: absolute;
  color: white;
  font-family: 'Syne-Extrabold';
  font-size: 48px;
  transform: translate(35vw, 200px);
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: grey;
  font-size: 16px;
  font-family: 'Lato-Regular'
  outline: none;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: right;
  margin-left: auto; 
  padding: 30px 0;
`;

const FavGalleryWrapper = styled(GalleryWrapper)`
  overflow: scroll
`