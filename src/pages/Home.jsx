import React from 'react';

import BannerMain from '../components/BannerMain';
import Categories from '../components/Categories';
import MostWanted from '../components/MostWanted';

const Home = () => {
  return (
    <>
      <BannerMain/>
      <Categories/>
      <MostWanted/>
    </>
  )
}

export default Home
