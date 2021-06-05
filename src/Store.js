import React from "react";
import './Store.css';
import Carousel from "react-bootstrap/Carousel";

function Store() {
  return (
    <div className="carosel__back">
      <Carousel>
        <Carousel.Item className="carosel__item">
          <img
            className="d-block w-100 carosel__img"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/3/0516194d-9080-4a1b-a9f1-f261a8b8c9e31622730655218-Desktop-banner--1-.gif"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carosel__item">
          <img
            className="d-block w-100 carosel__img"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/3/d2e0a562-e178-4024-96ea-6522cc2f1e8b1622735796695-Weekend-sale_DK-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carosel__item">
          <img
            className="d-block w-100 carosel__img"
            src="https://i.pinimg.com/originals/42/7f/cb/427fcb19fc75f1c0d6c480e51b9260fc.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Store;
