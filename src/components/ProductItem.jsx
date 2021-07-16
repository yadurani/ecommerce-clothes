import React from 'react';
import styled, { css }  from 'styled-components';
import { IoCartOutline } from "react-icons/io5";
import { connect } from 'react-redux';

import { discount, formatPrice } from '../utils/helpers';
import { productAddSelector } from '../app/slice';
import { addCart } from '../app/slice';


const WrapperItem = styled.div`
  border: 1px solid #E6E6E6;
  position: relative;
  text-align: center;
  ${({ slider }) => slider && css`
    @media(min-width: 561px) {
      & {
        margin: 0 20px;
      }
    }
  `}
`
const ImageItem = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
`

const DetailItem = styled.div`
  background-color: #F4F4F4;
  border: 1px solid #E6E6E6;
  padding: 20px;
  text-align: left;
`

const Discount = styled.span`
  background-color: #5B17AA;
  color: white;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  left: 12px;
  padding: 5px 15px;
  position: absolute;
  text-align: center;
  top: 12px;
`

const TitleItem = styled.h3`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 10px;
`

const Price = styled.p`
  color: #5B17AA;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  margin: 0 0 15px;
`

const PriceOld = styled.span`
  color: #6B6B6B;
  font-size: 16px;
  font-weight: normal;
  opacity: 0.8;
  text-decoration: line-through;
`

const ButtonAdd = styled.button`
  align-items: center;
  background-color: #000000;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  text-align: center;
  width: 100%;
  span {
    svg {
      margin-right: 10px;
    }
    align-items: center;
    display: flex;
  }
`

const ProductItem = ({ id, title, price, original_price, thumbnail, slider, isAdd, addCart }) => {
  const textButton = !isAdd ? 'Agregar al carrito' : 'Producto agregado'

  const addProduct = () => addCart({ id, title, price, quantity: 1 })

  return (
    <WrapperItem slider={slider}>
      {original_price &&
        <Discount>
          {discount(original_price, price)}%
        </Discount>
      }
      <ImageItem src={thumbnail} alt={title}/>
      <DetailItem>
        <TitleItem>
          {title}
        </TitleItem>
        <Price>
          ${formatPrice(price)} 
          {original_price &&
            <PriceOld>
              ${formatPrice(original_price)}
            </PriceOld> 
          }
        </Price>
        <ButtonAdd onClick={addProduct} >
          <span>
            <IoCartOutline size="1.3em"/> {textButton}
          </span>
        </ButtonAdd>
      </DetailItem>
    </WrapperItem>
  )
}

const mapStateToProps = (state, { id }) => ({
  isAdd: productAddSelector(id)(state)
})


const mapDispatchToProps = {
  addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)
