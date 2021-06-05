import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductList({ id, description, image, price,stock}) {
  const pricee = `$${price}`;
  return (
    <div className="pd" key={id}>
      <Link
        to={{
          pathname: "/productdesc",
          state: {
            img: { image },
            price: { price },
            stock: { price },
            desc: { description },
            id: { id },
            stock:{stock}
          },
        }}
        className="productlist__link"
      >
        <img className="pd__image" src={image} alt="xyz" />
        <p className="pd__desc">{description}</p>
        <p className="price">{pricee}</p>
        <button className="pd__addtocart">Add to cart</button>
      </Link>
    </div>
  );
}

export default ProductList;
