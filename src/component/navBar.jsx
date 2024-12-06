import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg shadow-sm mb-5 rounded sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand fs-2" href="">Multimart</a>
   
    <button
      className="navbar-toggler custom-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link text-black fw-bold links" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black fw-bold links" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black fw-bold links" to= "card">Cart</Link>
        </li>
      </ul>
    </div>

    <button type="button" class="btn btn-sm position-relative">
    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor: "#19283f"}}>
    1
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
  </div>
</nav>
        </>
    )
}

export default Navbar;