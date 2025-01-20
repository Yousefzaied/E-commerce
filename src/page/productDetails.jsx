
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import data from "./db";  

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const params = useParams(); 
    useEffect(() => {
        
        const productData = data.products.find((product) => product.id === parseInt(params.productId));
        
        
        setProduct(productData || {});
    }, [params.productId]);  

    return (
        <div className="product-details" id="prpduct-dtails">
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-10 col-lg-5 p-card m-2">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="col-10 col-lg-5 p-card m-2">
                        <h2 className="text-start">{product.name}</h2>
                        <div className="text-start star mb-3 mt-3 d-flex" style={{ color: "#ffcd4e" }}>
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={index < product.rating ? "text-warning" : ""}
                                />
                            ))}
                            <p className="text-black" style={{ marginLeft: "10rem" }}>4.8 ratings</p>
                        </div>
                        <div className="content mb-3 mt-3 text-start d-flex">
                            <span className="fw-bolder fs-4">{product.price}$</span>
                            <p style={{ marginLeft: "12rem" }}>category: {product.category}</p>
                        </div>
                        <p className="text-start">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!
                        </p>
                        <div className="input text-start">
                            <input type="number" />
                            <br />
                            <button className="btn btn-sm mt-3 text-white fw-bold" style={{ backgroundColor: "#0f3460" }}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
