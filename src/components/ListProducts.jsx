import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import Skeleton from './common/Skeleton';
import Error from './common/Error';
import { settings } from '../utils/constants';
import useProductsByCategoryDiscount from '../hooks/useProductsByCategoryDiscount';
import NotProducts from './common/NotProducts';

const WrapperProducts = styled.div`
  margin: 0 15px;
  @media(min-width: 561px) {
    width: 85%;
    margin: auto;
    margin-bottom: 70px;
  }
`

const ListProducts = () => {
  const { data: products, error, loading } = useProductsByCategoryDiscount()

  if (loading) return <Skeleton carousel/>
  if (error) return <Error/>
  if(!products.length) return <NotProducts/>

  return (
    <WrapperProducts>
      <Slider {...settings}>
        {products?.map((product) => (
          <ProductItem
            slider
            key={product.id}
            {...product}/>
        ))}
      </Slider>
    </WrapperProducts>
  )
}

export default ListProducts
