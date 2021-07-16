import React from 'react';
import styled from 'styled-components';

import ListProducts from './ListProducts';

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
  margin-bottom: 50px;
  font-weight: bold;
`

const MostWanted = () => {
  return (
    <section className="container margin-0">
      <Title>PRODUCTOS MÁS BUSCADOS</Title>
      <ListProducts/>
    </section>
  )
}

export default MostWanted
