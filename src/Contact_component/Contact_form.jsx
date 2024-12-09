import React from "react";
export default function Contact_form() {
  return (
    <>
      <div className="container py-5 contact">
        <div className="row py-4">
          <div className="col-md-4 bg py-5 px-3 text-white">
            <h1 className="fw-semibold">Contact Detail</h1>
            <p className="fs-5 mt-3">We are glad to help you 365 | 24 X 7</p>
            <hr />
            <div className="row mt-4 px-4">
              <div className="col-3">
                <div className="card card-body text-center">
                  <i class="fa-solid fa-map-marker-alt text-warning fs-2"></i>
                </div>
              </div>
              <div className="col-9">
                <h5 className="mt-2">Bund Garden Rd, Ahmednagar,414003.</h5>
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col-3">
                <div className="card card-body text-center">
                  <i class="fa-regular fa-envelope text-warning fs-2"></i>
                </div>
              </div>
              <div className="col-9">
                <h5 className="mt-2">MayaCarrental@gmail.com</h5>
              </div>
            </div>
            <div className="row mt-4 px-4">
              <div className="col-3">
                <div className="card card-body text-center">
                  <i class="fa-solid fa-phone text-warning fs-2"></i>
                </div>
              </div>
              <div className="col-9">
                <h5 className="mt-2">+919922244412</h5>
              </div>
            </div>
          </div>
          <div className="col-md-8 card_body">
            <div className="card card-body bg-white rounded-0 shadow">
              <h1 className="fw-bold">Have Any Questions?</h1>
              <label className="form-label fw-semibold">Name</label>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-0"
                  id="floatingInput"
                  placeholder="user"
                />
                <label for="floatingInput">Your Name</label>
              </div>
              <label className="form-label fw-semibold">Phone</label>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-0"
                  id="floatingInput"
                  placeholder="123456789"
                />
                <label for="floatingInput">Your Phone</label>
              </div>
              <label className="form-label fw-semibold">Email</label>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-0"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Your Email</label>
              </div>
              <label className="form-label fw-semibold">Message</label>
              <div class="form-floating">
                <textarea
                  class="form-control rounded-0"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Drop Message...</label>
              </div>
              <button className="btn btn-warning w-25 py-2 mt-3 fw-bold text-white">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 py-4">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60314.01992838157!2d74.69110116863513!3d19.124045672263698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbb49e60c682d%3A0xf96ca67fafb0217e!2sGRACE%20Travels%20Car%20rental%20service!5e0!3m2!1sen!2sin!4v1728622320724!5m2!1sen!2sin"
              width="600"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 py-5">
            <h1>FAQ's</h1>
            <div
              class="accordion accordion-flush py-4"
              id="accordionFlushExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What documents do I need to rent a car?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body fw-semibold">
                    Adhar Card,Pan Card
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Can I reserve a specific car for my resrevation?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body fw-semibold">
                    Reservations can only be confirmed by the category and not a
                    specific car brand, model or colour. However, you can tell
                    us your preference and we will try our best to offer you the
                    car you wish, depending on the availability.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Is it necessary to purchase additional insurance when
                    renting a car in Crete?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body fw-semibold">
                    It is not necessary to purchase additional insurance when
                    renting a car, as our prices include all necessary insurance
                    packages. However, you may choose to purchase the optional
                    SCDW insurance package with reduced Excess, for additonal
                    peace of mind.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
