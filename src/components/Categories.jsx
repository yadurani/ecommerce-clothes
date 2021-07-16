import React from 'react';
import styled from 'styled-components';

export const WrapperCategories = styled.section`
  display: grid;
  grid-gap: 20px 0;
  margin-bottom: 70px;
  @media(min-width: 561px) {
    grid-gap: 0 52px;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CategoryItem = styled.div`
  position: relative;
  width: 100%;
`

export const ImageItem = styled.img`
  width: 100%;
`

export const TitleItem = styled.h3`
  bottom: 0%;
  color: white;
  font-size: 50px;
  font-style: italic;
  font-weight: bolder;
  left: 0;
  margin: 0.8em 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: -5px 5px 10px rgb(0 0 0 / 80%);
  text-transform: uppercase;
  @media(max-width: 767px) {
    font-size: 30px;
  }
`

const Categories = () => {
  return (
    <WrapperCategories className="container">
      <CategoryItem>
        <ImageItem src="/images/categorias-destacadas-moda-infantil.png" alt="Moda infantil"/>
        <TitleItem>Moda infantil</TitleItem>
      </CategoryItem>
      <CategoryItem>
        <ImageItem src="/images/categorias-destacadas-proteccion.png" alt="Moda infantil"/>
        <TitleItem>Protección</TitleItem>
      </CategoryItem>
    </WrapperCategories>
  )
}

export default Categories
