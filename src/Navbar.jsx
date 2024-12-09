import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row bg-success first_row">
          <div className="col-3">
            <p className="mt-3 text-white fw-semibold">
              <i className="fa-solid fa-location-dot text-warning me-2"></i>
              303/2,Savedi,Ahmednagar
            </p>
          </div>
          <div className="col-3">
            <p className="mt-3 text-white fw-semibold">
              <i className="fa-solid fa-phone text-warning me-2"></i>+91
              +02414599
            </p>
          </div>
          <div className="col-3">
            <p className="mt-3 text-white fw-semibold">
              <i className="fa-regular fa-clock text-warning me-2"></i>Mon-Sat
              9:00-17:00
            </p>
          </div>
          <div className="col-2">
            <i class="fa-brands fa-linkedin icons me-4 text-white"></i>
            <i class="fa-brands fa-facebook icons me-4 text-white"></i>
            <i class="fa-brands fa-whatsapp icons me-4 text-white"></i>
          </div>
          <div className="col-1">
            <p className="mt-3 text-white fw-semibold">
              <i className="fa-regular fa-user text-warning me-2"></i>Profile
            </p>
          </div>
        </div>
        </div>
        <div className="container-fluid bg-white sticky-top">
        <div className="row">
          <div className="col-md-12 bg-white shadow">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">
                  <img src="logo_rent.png" width="130" height="53" /> 
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item text-black text-decoration-none">
                      <NavLink class="nav-link" to="" style={{"color":"black","textDecoration":"none"}}>
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/about" style={{"color":"black","textDecoration":"none"}}>
                        About
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/service" style={{"color":"black","textDecoration":"none"}}>
                        Service
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/blog" style={{"color":"black","textDecoration":"none"}}>
                        Blog
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink class="nav-link" to="/contact" style={{"color":"black","textDecoration":"none"}}>
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-5"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
