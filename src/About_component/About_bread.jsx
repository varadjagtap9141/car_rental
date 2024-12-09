import React from "react";
export default function About_bread() {
  return (
    <>
      <div className="container-fluid text-center py-5 ab_bread">
        <div className="row py-5">
        <h1 className="text-white">About</h1>
          <nav className="breadnav" aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a className="text-decoration-none text-white" href="#">Home</a>
              </li>
              <li className="breadcrumb-item active text-warning" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
