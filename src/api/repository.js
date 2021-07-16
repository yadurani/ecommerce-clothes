import Axios from 'axios';
import { API_BASE, API_CATEGORY, API_QUERY, FILTER_DISCOUNT, ID_CATEGORY_DRESSES, ID_CATEGORY_MODA, LIMIT_HOME } from '../utils/constants';

export const getProductsDiscount = (idCategory = ID_CATEGORY_DRESSES ) => {
  const URL_COMPOSE = `${API_BASE}?${API_CATEGORY}${idCategory}&${FILTER_DISCOUNT}&${LIMIT_HOME}`
  return Axios.get(URL_COMPOSE)
}

export const searchProduct = (value, idCategory = ID_CATEGORY_MODA) => {
  const URL_COMPOSE_SEARCH = `${API_BASE}${API_QUERY}${value}&${API_CATEGORY}${idCategory}`
  return Axios.get(URL_COMPOSE_SEARCH)
}