import React from "react";
export default function Offer() {
  return (
    <>
      <section className="offer_bg">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-md-4">
              <h1 className="fw-bold text-white">
                We Offer Clean Cars For Everyone
              </h1>
            </div>
            <div className="col-md-7">
              <p className="text-white">
                We are always bound to provide best services to our clients to
                their entire satisfaction with a view to expound our business.
                We assure you to provide our best services and extend our
                relationship with you forever.
              </p>
              <button className="btn rounded-2 mt-3 btn-warning text-white fw-semibold py-2 px-4">
                <i class="fa-solid fa-phone  me-3"></i>Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
