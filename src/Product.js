import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Product.css';

import ProductList from './ProductList';
import Sidebar from './Sidebar';


function Product() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`)
            .then((response) => (
                setdata(response.data)
            ))
            .catch(error => console.error(`erroe ${error}`));
    }, [])

    const stock=39;
    return (
        <div className="product">
            <div className="prdt__left">
                <Sidebar />
            </div>
            <div className="product__right">
                 <div className="sortby"> 
                    <div class="btn-group sortby__button">
                        <button type="button" class="btn btn-danger dropdown-toggle button" data-bs-toggle="dropdown" aria-expanded="false">
                            SortBy
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                     </div>
                </div>
                
            <div className="prdt">
            {data.map((dat) => (
                        <ProductList
                            id={dat.id}
                            description={dat.description}
                            price={dat.price}
                            image={dat.image}
                            key={dat.id}
                            stock={stock}         
                        />
                    ))}
                   </div> 
                </div>
            </div>
    )
}

export default Product
