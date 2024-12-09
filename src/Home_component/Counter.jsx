import React from "react";
export default function Counter() {
  return (
    <>
      <section className="counter_bg">
        <div className="container mt-5 py-5">
          <div className="row py-5">
            <div className="col-md-4 text-center">
              <i class="fa-solid fa-car-rear fs-1 text-warning mt-5"></i>
              <h1 className="counter_size mt-4 text-white">
                100<sup>+</sup>
              </h1>
              <h3 className="text-white mt-3">Available Car's</h3>
            </div>
            <div className="col-md-4 text-center">
              <i class="fa-regular fa-face-smile fs-1 text-warning mt-5"></i>
              <h1 className="counter_size mt-4 text-white">
                5000<sup>+</sup>
              </h1>
              <h3 className="text-white mt-3">Happy Customer's</h3>
            </div>
            <div className="col-md-4 text-center">
              <i class="fa-regular fa-calendar fs-1 text-warning mt-5"></i>
              <h1 className="counter_size mt-4 text-white">
                10<sup>+</sup>
              </h1>
              <h3 className="text-white mt-3">Years of Experienced</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
