import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IoTrashSharp } from 'react-icons/io5';


import { priceTotal, removeCart } from '../app/slice'
import { productsSelector } from '../app/slice';
import { formatPrice } from '../utils/helpers';
import NotProducts from './NotProducts';

const WrapperCart = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const ItemCart = styled.li`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const Total = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 25px 0;
  text-align: right;
`

const Cart = ({ allProducts, removeCart, priceTotalCart }) => {
  const deleteProduct = (id) => () => removeCart(id)

  if(!allProducts.length) return <NotProducts/>

  return (
    <>
      <WrapperCart>
        {allProducts?.map(({ title, id, price }) => (
          <ItemCart key={id}>
            <span>{title} - <b>${formatPrice(price)}</b></span>
            <Button onClick={deleteProduct(id)}>
              <IoTrashSharp/>
            </Button>
          </ItemCart> 
        ))}
      </WrapperCart>
      <Total>
        Total: ${formatPrice(priceTotalCart)}
      </Total>
    </>
  )
}

const mapStateToProps = (state) => ({
  allProducts: productsSelector(state),
  priceTotalCart: priceTotal(state)
})

const mapDispatchToProps = {
  removeCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
