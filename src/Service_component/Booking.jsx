import React from "react";

const Booking = () => {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="row">
        <div className="col-md-12 text-center safari">
          <h1 className="fw-bold">BOOK YOUR CAR</h1>
          <p className="fs-5 mt-4">
            Book your car using the configurator based on your requirements.
          </p>
          <img src="https://s7ap1.scene7.com/is/image/tatamotors/cosmic-gold-side?$IMG-852-304-D$&fit=crop&fmt=png-alpha" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12  py-5">
          <h1 className="text-center">Popular Choice</h1>
          <div class="card mb-3 rounded-0 shadow mt-5 ms-3 me-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://s7ap1.scene7.com/is/image/tatamotors/cosmic-gold-right?$SC-376-321-D$&fit=fit&fmt=png-alpha"
                  class="img-fluid rounded-start h-100 "
                  alt="..."
                />
              </div>
              <div class="col-md-8 ">
                <div class="card-body" style={{ background: "#F8F8F8" }}>
                  <h5 class="card-title py-4">
                    TATA SAFARI<h5 className="float-end">₹3000/hr</h5>
                  </h5>
                  <hr />
                  <ul class="nav nav-tabs border-0 " id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Spaces
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Exterior
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Interior
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content py-4" id="myTabContent">
                    <div
                      class="tab-pane px-4 fade show active"
                      id="home-tab-pane"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <b>Fuel Type</b>
                          <p>Diesel</p>
                        </div>
                        <div className="col-md-4">
                          <b>Transmission Type</b>
                          <p>6 Speed AT</p>
                        </div>
                        <div className="col-md-4">
                          <b>Seating Capacity</b>
                          <p>7</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="profile-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Color</b>
                          <p>Stellar Frost</p>
                        </div>
                        <div className="col-md-6">
                          <b>Tyre Size</b>
                          <p>
                            19<sup>"</sup>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="contact-tab-pane"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Dashboard Finish</b>
                          <p>Teak Wood with Silver Lining finished Dashboard</p>
                        </div>
                        <div className="col-md-6">
                          <b>Upholestery</b>
                          <p>Leatherette</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-transparent border-2 border-primary px-5 book fw-semibold rounded-0 fs-5 mb-5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-0 shadow mt-5 ms-3 me-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="scorpio.png"
                  class="img-fluid rounded-start mt-5 "
                  alt="..."
                />
              </div>
              <div class="col-md-8 ">
                <div class="card-body" style={{ background: "#F8F8F8" }}>
                  <h5 class="card-title py-4">
                    MAHINDRA SCORPIO<h5 className="float-end">₹2000/hr</h5>
                  </h5>
                  <hr />
                  <ul class="nav nav-tabs border-0 " id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark active"
                        id="home-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane2"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Spaces
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="profile-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane2"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Exterior
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="contact-tab2"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane2"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Interior
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content py-4" id="myTabContent">
                    <div
                      class="tab-pane px-4 fade show active"
                      id="home-tab-pane2"
                      role="tabpanel"
                      aria-labelledby="home-tab2"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <b>Fuel Type</b>
                          <p>Diesel</p>
                        </div>
                        <div className="col-md-4">
                          <b>Transmission Type</b>
                          <p>6 Speed AT</p>
                        </div>
                        <div className="col-md-4">
                          <b>Seating Capacity</b>
                          <p>7</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="profile-tab-pane2"
                      role="tabpanel"
                      aria-labelledby="profile-tab2"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Color</b>
                          <p>Mate Black</p>
                        </div>
                        <div className="col-md-6">
                          <b>Mileage</b>
                          <p>15.42 kmpl</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="contact-tab-pane2"
                      role="tabpanel"
                      aria-labelledby="contact-tab2"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Dashboard Finish</b>
                          <p>Teak Wood with Silver Lining finished Dashboard</p>
                        </div>
                        <div className="col-md-6">
                          <b>Upholestery</b>
                          <p>Leatherette</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-transparent border-2 border-primary px-5 book fw-semibold rounded-0 fs-5 mb-5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-0 shadow mt-5 ms-3 me-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="ertiga.png"
                  class="img-fluid rounded-start mt-5 w-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8 ">
                <div class="card-body" style={{ background: "#F8F8F8" }}>
                  <h5 class="card-title py-4">
                    SUZUKI ERTIGA<h5 className="float-end">₹1800/hr</h5>
                  </h5>
                  <hr />
                  <ul class="nav nav-tabs border-0 " id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark active"
                        id="home-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane3"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Spaces
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="profile-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane3"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Exterior
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="contact-tab3"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane3"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Interior
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content py-4" id="myTabContent">
                    <div
                      class="tab-pane px-4 fade show active"
                      id="home-tab-pane3"
                      role="tabpanel"
                      aria-labelledby="home-tab3"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <b>Fuel Type</b>
                          <p>Petrol/CNG</p>
                        </div>
                        <div className="col-md-4">
                          <b>Transmission Type</b>
                          <p>6 Speed AT</p>
                        </div>
                        <div className="col-md-4">
                          <b>Seating Capacity</b>
                          <p>7</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="profile-tab-pane3"
                      role="tabpanel"
                      aria-labelledby="profile-tab3"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Color</b>
                          <p>White</p>
                        </div>
                        <div className="col-md-6">
                          <b>Mileage</b>
                          <p>20.3 kmpl</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="contact-tab-pane3"
                      role="tabpanel"
                      aria-labelledby="contact-tab3"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Dashboard Finish</b>
                          <p>Teak Wood with Silver Lining finished Dashboard</p>
                        </div>
                        <div className="col-md-6">
                          <b>Upholestery</b>
                          <p>Leatherette</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-transparent border-2 border-primary px-5 book fw-semibold rounded-0 fs-5 mb-5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3 rounded-0 shadow mt-5 ms-3 me-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmaruti-suzuki%2Fswift-dzire%2Fmaruti-suzuki-swift-dzire-cave-black.png%3Fv%3D1&w=750&q=75"
                  class="img-fluid rounded-start mt-5 w-100"
                  alt="..."
                />
              </div>
              <div class="col-md-8 ">
                <div class="card-body" style={{ background: "#F8F8F8" }}>
                  <h5 class="card-title py-4">
                    SWIFT DZIRE<h5 className="float-end">₹1300/hr</h5>
                  </h5>
                  <hr />
                  <ul class="nav nav-tabs border-0 " id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark active"
                        id="home-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#home-tab-pane4"
                        type="button"
                        role="tab"
                        aria-controls="home-tab-pane"
                        aria-selected="true"
                      >
                        Spaces
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="profile-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-tab-pane4"
                        type="button"
                        role="tab"
                        aria-controls="profile-tab-pane"
                        aria-selected="false"
                      >
                        Exterior
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        style={{ background: "#F8F8F8" }}
                        class="nav-link border-0  text-dark"
                        id="contact-tab4"
                        data-bs-toggle="tab"
                        data-bs-target="#contact-tab-pane4"
                        type="button"
                        role="tab"
                        aria-controls="contact-tab-pane"
                        aria-selected="false"
                      >
                        Interior
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content py-4" id="myTabContent">
                    <div
                      class="tab-pane px-4 fade show active"
                      id="home-tab-pane4"
                      role="tabpanel"
                      aria-labelledby="home-tab4"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <b>Fuel Type</b>
                          <p>Diesel/Petrol</p>
                        </div>
                        <div className="col-md-4">
                          <b>Transmission Type</b>
                          <p>5 Speed AT</p>
                        </div>
                        <div className="col-md-4">
                          <b>Seating Capacity</b>
                          <p>5</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="profile-tab-pane4"
                      role="tabpanel"
                      aria-labelledby="profile-tab4"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Color</b>
                          <p>White/Red</p>
                        </div>
                        <div className="col-md-6">
                          <b>Mileage</b>
                          <p>21.41 kmpl</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane px-4 fade"
                      id="contact-tab-pane4"
                      role="tabpanel"
                      aria-labelledby="contact-tab4"
                      tabindex="0"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <b>Dashboard Finish</b>
                          <p>Teak Wood with Silver Lining finished Dashboard</p>
                        </div>
                        <div className="col-md-6">
                          <b>Upholestery</b>
                          <p>Leatherette</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-transparent border-2 border-primary px-5 book fw-semibold rounded-0 fs-5 mb-5">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
