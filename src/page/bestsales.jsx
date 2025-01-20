

import React, { useState, useEffect } from "react";
import Product3 from "./product3";
import data from "./db";

const BestSales = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.products);
    }, []);

    return ( 
        <div className="discount mb-5 pb-5 pt-5" style={{backgroundColor:"white"}}>
            <h1 className="text-center pb-5 pt-5">Best Salles</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {products.slice(17, 24).map((product) => (
                        <Product3 key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSales;
