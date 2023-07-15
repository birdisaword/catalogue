import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atoms/Logo';
import { styled } from 'styled-components';
import FavouritesButton from '../molecules/FavouritesButton';
import SignInButton from '../molecules/SignInButton';

const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <StyledUl>
        <LeftDiv>
          <Link to="/#">
            <Logo />
          </Link>
        </LeftDiv>
        <CenterDiv>
          <li>
            <StyledLink to="/#">HOME</StyledLink>
          </li>
          <li>
            <StyledLink to="#">TOURS</StyledLink>
          </li>
          <li>
            <StyledLink to="#">ABOUT</StyledLink>
          </li>
          <li>
            <StyledLink to="#">HELP</StyledLink>
          </li>
        </CenterDiv>
        <RightDiv>
          <FavouritesButton />
          <SignInButton/>
        </RightDiv>
      </StyledUl>
    </nav>
  );
};

export default NavigationMenu;

const StyledUl = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  background-color: rgba(30, 30, 30, 0.48);
  height: 80px;
  align-items: center;
`

const CenterDiv = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`

const RightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  margin-right: 40px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'LatoRegular', sans-serif;

  &:hover {
    color: grey;
  }
`

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`
