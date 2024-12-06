
// json-server --watch db.json --port 3001


import React, { useState, useEffect } from "react";
import Product from "./product";

const Discount = () => {
    const api_url = 'http://localhost:3001/products';
    const [products, setProducts] = useState([]);

    const getProducts = () => { 
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    };

    useEffect(() => { 
        getProducts();
    }, []);

    return ( 
        <div className="discount mb-5 pb-5 pt-5">
            <h1 className="text-center pb-5 pt-5">Big Discount</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {products.slice(0, 6).map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Discount;
