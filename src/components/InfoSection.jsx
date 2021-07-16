import React from 'react';
import styled from 'styled-components';
import { IoCartOutline, IoPersonOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { countSelector } from '../app/slice';

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
  a {
    color: black;
  }
`

const Number = styled.span`
  align-items: center;
  background-color: #5B17AA;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 9px;
  height: 14px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 14px;
`

const ButtonSign = styled.button`
  border: 1px solid black;
  background-color: white;
  height: 35px;
  padding: 0 15px;
  border-radius: 0;
  margin-left: 15px;
  cursor: pointer;
`

const WrapperInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  @media(max-width: 767px) {
    order: 2;
  }
`

const InfoSection = ({ numberProducts }) => {
  const number = numberProducts > 0 && numberProducts
  return (
    <WrapperInfo>
      <ButtonIcon>
        <Link to="/checkout">
          <IoCartOutline size="2em"/>
          {number && <Number>{number}</Number>}
        </Link>
      </ButtonIcon>
      <ButtonIcon>
        <IoPersonOutline size="2em"/>
      </ButtonIcon>
      <ButtonSign>
        Iniciar sesión
      </ButtonSign>
    </WrapperInfo>
  )
}

const mapStateToProps = (state) => ({
  numberProducts: countSelector(state)
})

export default connect(mapStateToProps, null)(InfoSection)
