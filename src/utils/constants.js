import { ButtonNext, ButtonPrev } from '../components/Buttons';

export const API_BASE = 'https://api.mercadolibre.com/sites/MCO/search';
export const API_QUERY = '?q=';
export const API_CATEGORY =  'category=';
export const ID_CATEGORY_MODA = 'MCO1430';
export const ID_CATEGORY_DRESSES = 'MCO157294';
export const FILTER_DISCOUNT = 'discount=5-100';
export const LIMIT_HOME = 'limit=8';

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <ButtonNext/>,
  prevArrow: <ButtonPrev/>,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
};