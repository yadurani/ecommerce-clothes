import React from 'react';
import styled from 'styled-components';

const WrapperError = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
`

const Error = () => (
  <WrapperError>
    😞☹😞
    <p>Error, vuelve a intentarlo.</p>
  </WrapperError>
)


export default Error
