import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Blogs!</h1>
            <div className="row">
              <div className="col-md-4 mt-5">
                <h4>Why Maya Car Rentals?</h4>
                <p className="fw-semibold">
                  We are always bound to provide best services to our clients to
                  their entire satisfaction with a view to expound our business.
                  We assure you to provide our best services and extend our
                  relationship with you forever.
                </p>
              </div>
              <div className="col-md-4 mt-5">
                <h4>Quality Policy</h4>
                <p className="fw-semibold">
                  ShubhYatra Travels is committed to enhance customer’s
                  satisfaction by Serving consistent quality services conforming
                  to customer requirements and continually improve the
                  effectiveness of quality management system through involvement
                  of all employees. We provides quality service with punctual
                  timing, which will help us in business growth.
                </p>
              </div>
              <div className="col-md-4 mt-5">
                <h4>Quality Objectives</h4>
                <ol className="fw-semibold">
                  <li>Improving Customer Satisfaction</li>
                  <li> Reducing Customer Complaints</li>
                  <li>Increasing Customer Base</li>
                </ol>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-12">
                <h1 className="fw-bold text-center">What Our Customer Say</h1>
                <div className="row">
                  <div className="col-md-4 mt-5">
                    <div
                      class="card border-0 rounded-0 shadow"
                      style={{ background: "#F4F4F4" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">
                          Mehul Mehul
                          <img
                            className="float-end"
                            width={"25px"}
                            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                          />
                        </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          2023-12-11
                        </h6>
                        <p class="card-text">
                          very good person so Happy Ramesh bhai good
                        </p>
                        <a href="#" class="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div
                      class="card border-0 rounded-0 shadow"
                      style={{ background: "#F4F4F4" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">
                          Rajesh Nagrecha
                          <img
                            className="float-end"
                            width={"25px"}
                            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                          />
                        </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          2023-12-10
                        </h6>
                        <p class="card-text">
                          very good person so Happy Ramesh bhai good
                        </p>
                        <a href="#" class="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mt-5">
                    <div
                      class="card border-0 rounded-0 shadow"
                      style={{ background: "#F4F4F4" }}
                    >
                      <div class="card-body">
                        <h5 class="card-title">
                          Ashok Shinde
                          <img
                            className="float-end"
                            width={"25px"}
                            src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                          />
                        </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                          2023-20-11
                        </h6>
                        <p class="card-text">
                          very good person so Happy Ramesh bhai good
                        </p>
                        <a href="#" class="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
