import React, { useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { favoriteFlightsState } from '../states';
import CarouselImage1 from '../../assets/1.png';
import CarouselImage2 from '../../assets/2.png';
import CarouselImage3 from '../../assets/3.png';
import { styled } from 'styled-components';
import SliderNav from '../molecules/SliderNav';
import { Button, HeartIcon } from '../molecules/FavouritesButton';
import heartIcon from '../../assets/heart.png'
import BuyButton from '../molecules/BuyButton';
import { v4 as uuidv4 } from 'uuid';

const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      description
      name
    }
  }
`;

const MainSliderSection: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [favoriteFlights, setFavoriteFlights] = useRecoilState(favoriteFlightsState);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleAddToFavorite = (rocket: any, imageSrc: string) => {
    const newFavoriteFlight = {
      id: uuidv4(),
      name: rocket.name,
      description: rocket.description,
      image: imageSrc,
    };

    setFavoriteFlights((prevFlights) => [...prevFlights, newFavoriteFlight]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const carouselImages = [CarouselImage1, CarouselImage2, CarouselImage3];
  const totalImages = carouselImages.length;

  return (
    <Div id="mainSliderSection">
      <SliderNav rockets={data.rockets} galleryRef={galleryRef} />
      <GalleryWrapper ref={galleryRef}>
        {data.rockets.map((rocket: any, index: number) => {
          const imageIndex = index % totalImages;
          const imageSrc = carouselImages[imageIndex];

          return (
            <Card key={rocket.id}>
              <div>
                <CardImgContainer>
                  <CardImg src={imageSrc} alt={rocket.name} />
                </CardImgContainer>
                <TourContainer>
                  <TourName>{rocket.name}</TourName>
                  <TextContainer>
                    <DescriptionText>{rocket.description}</DescriptionText>
                  </TextContainer>
                </TourContainer>
                <ButtonWrapper>
                  <BuyButton />
                  <FavButton onClick={() => handleAddToFavorite(rocket, imageSrc)}>
                    <HeartIcon src={heartIcon} alt='heart' />
                  </FavButton>
                </ButtonWrapper>
              </div>
            </Card>
          );
        })}
      </GalleryWrapper>
    </Div>
  );
};

export default MainSliderSection;

export const Div = styled.div`
  width: 100%;
  height: 100vh;
`

export const GalleryWrapper = styled.div`
  display: flex;
  gap: 25px;
  padding: 20px;
  overflow: hidden;
  height: 600px;
`;

export const Card = styled.div`
  flex: 0 0 32%;
  height: 574px;
  border: solid #D3EAFF 1px
`;

export const CardImgContainer = styled.div`
  height: 296px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const TextContainer = styled.div`
  height: 88px;
  width: 80%;
  overflow: scroll;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`

export const TourName = styled.h3`
  font-family: 'Syne-Bold';
  font-size: 24px
`

export const DescriptionText = styled.p`
  font-family: 'Lato-Light';
  font-size: 24px;
  margin: 0 auto
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 5px 20px;
`;


export const FavButton = styled(Button)`
  background-color: #ECECEC;
  &:active {
    transform: translateY(1px);
    background-color: #dfdfdf;
    }
`