import React from 'react';
import styled from 'styled-components';

const WrapperNotProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
`

const NotProducts = () => (
  <WrapperNotProducts>
    😞☹😞
    <p>No tienes productos.</p>
  </WrapperNotProducts>
)


export default NotProducts
