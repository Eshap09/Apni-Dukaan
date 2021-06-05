import React from 'react';
import './Productdesc.css';
import {useLocation} from 'react-router-dom';
function Productdesc() {
    
    const location=useLocation();
     const {description}=location.state.desc;
     const {image}=location.state.img;
     const {price}=location.state.price;
     const {id}=location.state.id;
     const {stock}=location.state.stock;
   
   
     return (
        <div className="prdtdesc">
            <div className="prdtdesc__left">
                <img className="prdtdesc__img" src={image} alt=""/>
                <div className="prdt__button">
                <button className="prdtdesc__button">Add to cart</button>
                </div>
            </div>
            <div className="prdtdesc__right">
                <h6 className="prdtdesc__title">Title</h6>
                <p className="prdtdesc__desc">{description}</p>
                <h4 className="prdtdesc__price">${price}</h4>
                <p className="prdtdesc__stock">{stock > 0 ? `In stock, just ${stock} left. Hurry up!`:"out of stock"} </p>
            </div>
        </div>
    )
}

export default Productdesc