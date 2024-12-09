import React from "react";
export default function Car_List() {
  return (
    <>
      <section className="bg-dark">
        <div className="container">
          <div className="row">
            <h3 className="text-center text-white mt-5">Top Rated Car's</h3>
            <div className="col-md-3 mt-5 mb-5">
              <a href="/service">
                {" "}
                <div class="card mb-3 bg-transparent text-white border border-secondary">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb3jPeP2bC9kombhNHEBViRMNSj9wGP4BJqA&s"
                    class="card-img-top p-2"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">TATA SAFARI (AC)</h5>
                    <h6 class="card-title text-warning text-center">SUV</h6>
                    <p class="card-text">
                      <i>
                        <i class="fa-solid fa-person me-2 text-warning"></i>7
                        seater
                      </i>
                      <p className="card-text float-end">
                        <i class="fa-solid fa-suitcase-rolling text-warning me-2"></i>
                        2 Large Bag
                      </p>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 mt-5 mb-5">
              <a href="/service">
                {" "}
                <div class="card mb-3 bg-transparent text-white border border-secondary">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHpTTdsnxP22rpsKt99ik4mAYJPhWdXpRvQ&s"
                    class="card-img-top p-2"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">MAHINDRA SCORPIO</h5>
                    <h6 class="card-title text-warning text-center">SUV</h6>
                    <p class="card-text">
                      <i>
                        <i class="fa-solid fa-person me-2 text-warning"></i>7
                        seater
                      </i>
                      <p className="card-text float-end">
                        <i class="fa-solid fa-suitcase-rolling text-warning me-2"></i>
                        2 Large Bag
                      </p>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 mt-5 mb-5">
              <a href="/service">
                <div class="card mb-3 bg-transparent text-white border border-secondary">
                  <img
                    src="https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=80"
                    class="card-img-top p-2"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">SUZUKI ERTIGA (AC)</h5>
                    <h6 class="card-title text-warning text-center">XUV</h6>
                    <p class="card-text">
                      <i>
                        <i class="fa-solid fa-person me-2 text-warning"></i>7
                        seater
                      </i>
                      <p className="card-text float-end">
                        <i class="fa-solid fa-suitcase-rolling text-warning me-2"></i>
                        1 Large Bag
                      </p>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3 mt-5 mb-5">
              <a href="/service">
                {" "}
                <div class="card mb-3 bg-transparent text-white border border-secondary">
                  <img
                    src="https://www.bihartrip.com/pub/media/catalog/product/cache/cab15b78dac35e1077797ee439f6374a/b/i/bihartrip-cab-59.jpg"
                    class="card-img-top p-2"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title text-center">SWIFT DEZIRE (AC)</h5>
                    <h6 class="card-title text-warning text-center">SEDAN</h6>
                    <p class="card-text">
                      <i>
                        <i class="fa-solid fa-person me-2 text-warning"></i>5
                        seater
                      </i>
                      <p className="card-text float-end">
                        <i class="fa-solid fa-suitcase-rolling text-warning me-2"></i>
                        1/2 Large Bag
                      </p>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
