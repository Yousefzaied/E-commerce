import React from "react";
import hero from "../component/hero-img.png";
import wirles from "../component/wireless-01.png";
import phone from "../component/phone-08.png";

const Landing = () => {
    return ( 
        <>
<div id="carouselExampleControlsNoTouching" className="carousel slide landing" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={hero} className="d-block img-fluid" alt="Hero" />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Welcome to Our Hero Section</h1>
          <p className="lead">This is a description for the hero section image. You can customize it further.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={wirles} className="d-block img-fluid" alt="Wireless" />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Wireless Technology</h1>
          <p className="lead">Explore our advanced wireless technology. Customizable and responsive design.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={phone} className="d-block img-fluid" alt="Phone" />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Modern Smartphones</h1>
          <p className="lead">Discover the latest smartphones with sleek designs and top features.</p>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </>
    );
}

export default Landing;

