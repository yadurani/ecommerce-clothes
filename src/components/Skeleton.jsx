import React from 'react';
import styled, { keyframes } from 'styled-components';
import { listEmpty } from '../utils/helpers';

const ContainerSkeleton = styled.ul`
  display: grid;
  grid-gap: 15px 62px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0 auto 70px;
  padding: 0;
  width: ${({ carousel }) => carousel && '80%'};
  @media(max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 42px;
  }
  @media(max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px 0;
  }
`

const animationSkeleton = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -135% 0%;
  }
`

const ItemSkeleton = styled.li`
  -moz-column-break-inside: avoid;
  -webkit-column-break-inside: avoid;
  animation: ${animationSkeleton} 1.2s ease-in-out infinite;
  background-image: linear-gradient(to right, #9b9b9b 0%, #F8F8F8 50%, #969595 100%);
  background-position: 0% 0%;
  background-size: 400% 400%;
  display: inline-block;
  height: 350px;
  margin: 5px 0;
  opacity: 0.8;
  width: 100%;
`



const Skeleton = ({ quantity = 4, carousel }) => {
  const listProducts = listEmpty(quantity)

  return (
    <div className="container">
      <ContainerSkeleton carousel={carousel}>
        {listProducts?.map((item) => (
          <ItemSkeleton key={item}/>
          ))}
      </ContainerSkeleton>
    </div>
  )
}

export default Skeleton
