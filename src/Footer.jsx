import React from "react";
export default function Footer() {
  return (
    <section className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2">
            <img src="footer.png" />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-7">
            <h3 className="text-white">Subscribe to our newsletter</h3>
          </div>
          <div className="col-md-5">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control rounded-0"
                placeholder="example@gmail.com"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-success rounded-0"
                type="button"
                id="button-addon2"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mb-2">
            <p className="text-white">
              Car rental is a popular choice for travelers who want to explore a
              new city or go on a road trip. It can also be a practical and
              economical option{" "}
            </p>
            <i class="fa-brands fs-4  fa-linkedin me-4 text-white"></i>
            <i class="fa-brands fs-4  fa-facebook me-4 text-white"></i>
            <i class="fa-brands fs-4  fa-twitter me-4 text-white"></i>
            <i class="fa-brands fs-4  fa-instagram me-4 text-white"></i>
          </div>
          <div className="col-md-2 text-white mb-2">
            <h5>About Us</h5>
            <ul className="f_list">
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Details
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Tearms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-white mb-2">
            <h5>About Us</h5>
            <ul className="f_list">
              <li>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-decoration-none text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="/service" className="text-decoration-none text-white">
                  Service
                </a>
              </li>
              <li>
                <a href="/blog" className="text-decoration-none text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/blog" className="text-decoration-none text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-white">
            <h5>You Have Question</h5>
            <p>
              <i class="fa-solid fa-location-dot me-2"></i>203,Fate St.Mountain
              View,San Fransiso,California,USA
            </p>
            <p>
              <i class="fa-solid fa-phone me-2"></i>+2,39239292 10
            </p>
            <p>
              <i class="fa-solid fa-envelope me-2"></i>carrental@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
