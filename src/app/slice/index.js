
import { createSlice, createEntityAdapter, createSelector } from '@reduxjs/toolkit';

const productsCart = createEntityAdapter()

const cart = createSlice({
  name: 'Cart',
  initialState: productsCart.getInitialState(),
  reducers: {
    addCart: productsCart.addOne,
    updateCartById: productsCart.updateOne,
    removeCart: productsCart.removeOne
  }
})

export const { addCart, updateCartById, removeCart } = cart.actions

export default cart.reducer

export const {
  selectAll: getAllProducts,
} = productsCart.getSelectors((state) => state[cart.name])

export const countSelector = createSelector(getAllProducts, (products) => products.length)

export const productAddSelector = (id) => createSelector(getAllProducts, (products) => {
  return products?.some(product => product.id === id)
})

export const productsSelector = createSelector(getAllProducts, (products) => products)

export const priceTotal = createSelector(getAllProducts, (products) => {
  const prices = products.reduce((acc, value) => acc + value.price, 0)
  return prices
})