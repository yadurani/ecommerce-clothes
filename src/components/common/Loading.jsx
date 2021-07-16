import React from 'react';
import styled from 'styled-components';

const WrapperLoader = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Loading = () => {
  return (
    <WrapperLoader>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </WrapperLoader>
  )
}

export default Loading
