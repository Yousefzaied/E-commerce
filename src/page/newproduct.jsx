import React, { useEffect, useState } from "react";
import Product2 from "./Product2";
import data from "./db";

const NewProduct = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data.products);
    }, []);
    return ( 
        <>
        <div className="discount mb-5 pb-5 pt-5" style={{backgroundColor:"white"}}>
            <h1 className="text-center pb-5 pt-5">New Arrivals</h1>
            <div className="container">
                <div className="row justify-content-center">
                    {product.slice(7, 16).map((product) => (
                        <Product2 key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default NewProduct;