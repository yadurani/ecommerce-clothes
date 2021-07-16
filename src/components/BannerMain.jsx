import React from 'react';
import styled from 'styled-components';

const WrapperMain = styled.section`
  margin-bottom: 70px;
  width: 100%;
`

const ImgBanner = styled.img`
  width: 100%;
`

const BannerMain = () => {
  return (
    <WrapperMain>
      <ImgBanner src="/images/banner-principal-desktop.png" alt="Banner principal"/>
    </WrapperMain>
  )
}

export default BannerMain
