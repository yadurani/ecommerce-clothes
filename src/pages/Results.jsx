import React from 'react';
import { useParams } from 'react-router-dom';

import ListResults from '../components/ListResults';

const Results = () => {
  const { product } = useParams()
  return (
    <section className="container">
      <h1>Resultados para {product}</h1>
      <ListResults/>
    </section>
  )
}

export default Results
