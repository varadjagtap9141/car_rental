import React from "react";
export default function Section1() {
  return (
    <>
      <div className="container-fluid background">
        <div className="row">
          <div className="col-md-3 mt-5 mb-5 p-4">
            <div className="card card-body">
            <h5 className="mb-3">Make your Trip</h5>
              <div class="form-floating input_h mb-4">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="date"
                />
                <label for="floatingInput">Pickup Date</label>
              </div>
              <div class="form-floating input_h mb-4">
                <input
                  type="time"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Pickup Time</label>
              </div>
              <div class="form-floating input_h mb-4">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="date"
                />
                <label for="floatingInput">Drop Date</label>
              </div>
              <div class="form-floating input_h mb-4">
                <input
                  type="time"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Drop Time</label>
              </div>
              <button className="btn btn-success">Book Now</button>
            </div>
          </div>
          <div className="col-md-9 text-center text-white mt-5 mb-5 opa">
            <h1 className="m_top">50% off Book your ride now</h1>
            <p className="m_bottom">
              Save upto 2200 rupess on best ride at myride carservice hurry up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
