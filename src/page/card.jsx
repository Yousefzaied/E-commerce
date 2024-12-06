import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Card = () => {
    const api_url = 'http://localhost:3001/products';
    const[product, setProduct] = useState([]);
    
    const params = useParams();
    

    useEffect(() => {
        fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((product) => setProduct(product))
    }, [])

    return ( 
       <>
        
        <h1>Card</h1>
        {product.id}
        </>
     );
}
 
export default Card;