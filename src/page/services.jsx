import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return ( 
        <>
        <div className="srvice mt-5 mb-5 pt-5 pb-5">
        <div className="container overflow-hidden text-center">
  <div className="row">
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div class="p-3" style={{ backgroundColor: "#fdefe6", borderRadius: "8px" }}>
      <FontAwesomeIcon icon={faCar} />
      <h3 className="p-2" >Free Shipping</h3>
      <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="p-3" style={{ backgroundColor: "#ceebe9",  borderRadius: "8px" }}>
      <FontAwesomeIcon icon={faCreditCard} />
      <h3 className="p-2" >Safe Payment</h3>
      <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="p-3" style={{ backgroundColor:"#e2f2b2", borderRadius: "8px" }}>
      <FontAwesomeIcon icon={faShieldHalved} />
      <h3 className="p-2" >Secure Payment</h3>
      <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="p-3" style={{ backgroundColor:"#ceebe9", borderRadius: "8px" }}>
      <FontAwesomeIcon icon={faHeadphones} />
      <h3 className="p-2">Back Guarantee</h3>
      <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </>
     );
}
 
export default Services;