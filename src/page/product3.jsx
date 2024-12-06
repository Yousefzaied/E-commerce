
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Product3 = ({ product }) => {
    return (
        <div className="col-10 col-md-6 col-lg-3 mb-4 pt-3 card text-center">
            <div className="image">
                <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <a className="text-black text-decoration-none pt-3 text-start fw-bold fs-5" href="/">
                {product.name}
            </a>
            <div className="text-start star">
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={index < product.rating ? "text-warning" : ""}
                    />
                ))}
            </div>
            <div className="price d-flex justify-content-between align-items-center mt-3">
                <p className="fs-4 fw-bold">${product.price}</p>
                <a href="/" className="plus">
                    <FontAwesomeIcon icon={faPlus} />
                </a>
            </div>
            <Link className="btn btn-sm text-white mt-3" style={{backgroundColor:"#0f3460"}} to={`/product/${product.id}`}>
              Details
            </Link>
        </div>
    );
};

export default Product3;
