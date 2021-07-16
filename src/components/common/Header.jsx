import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import InfoSection from '../InfoSection';
import Navbar from './Navbar';
import SearchInput from '../SearchInput';

const WrapperHeader = styled.header`
  background: white;
  left: 0%;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 10;
`

const HeaderMain = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 0 40px;
  grid-template-columns: 400px 1fr 300px;
  padding: 15px 0;
  @media(max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 20px;
  }
`

const Logo = styled.img`
  height: 20px;
  order: 1;
  @media(min-width: 769px) {
    height: 50px;
  }
`

const Header = () => {
  return (
    <WrapperHeader>
      <HeaderMain className="container">
        <Link to="/">
          <Logo src="images/ClothesStore.png" alt="Logo"/>
        </Link>
        <SearchInput/>
        <InfoSection/>
      </HeaderMain>
      <Navbar/>
    </WrapperHeader>
  )
}

export default Header
