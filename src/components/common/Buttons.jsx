import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
`

export const ButtonNext = ({ currentSlide, slideCount, ...props }) => {
  return (
    <Button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <img src="images/arrowRight.png" alt="Arrow Right" height="50"/>
    </Button>
  )
}

export const ButtonPrev = ({ currentSlide, slideCount, ...props }) => {
  return (
    <Button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <img src="images/arrowLeft.png" alt="Arrow Right" height="50"/>
    </Button>
  )
}


