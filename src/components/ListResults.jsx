import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Error from './common/Error';
import ProductItem from './ProductItem';
import Skeleton from './common/Skeleton';
import useSearchByCategory from '../hooks/useSearchByCategory';
import NotProducts from './common/NotProducts';

const WrapperResults = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px 62px;
  @media(max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 42px;
  }
  @media(max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px 0;
  }
`

const ListResults = () => {
  const { product } = useParams()
  const { data: searchProducts, error, loading } = useSearchByCategory(product)

  if (loading) return <Skeleton quantity={20}/>
  if (error) return <Error/>
  if(!searchProducts.length) return <NotProducts/>

  
  return (
    <WrapperResults>
      {searchProducts?.map((product) => (
        <ProductItem key={product.id} {...product}/>
      ))}
    </WrapperResults>
  )
}

export default ListResults
