import React from "react";
export default function Why_us()
{
    return(
        <>
        <div className="container why_us">
        <div className="row">
        <div className="col-md-12 mt-5">
        <h3 className="text-center">Why us</h3>
        </div>
        <div className="row">
        <div className="col-md-4 mt-5 mb-4">
        <div className="card card-body rounded-0 border-0" style={{"background":"#EDEDED"}}>
        <i class="fa-solid fa-calendar-days text-center text-secondary mt-5 mb-5"></i>
        <h3 className="text-center">We are Experienced</h3>
        </div>
        </div>
        <div className="col-md-4 mt-5 mb-4">
        <div className="card card-body rounded-0 border-0" style={{"background":"#F2C424"}}>
        <i class="fa-regular fa-handshake text-center text-white mt-5 mb-5"></i>
        <h3 className="text-center">Trusted and Reliable</h3>
        </div>
        </div>
        <div className="col-md-4 mt-5 mb-4">
        <div className="card card-body rounded-0 border-0" style={{"background":"#302D5C"}}>
        <i class="fa-solid fa-indian-rupee-sign text-center text-white mt-5 mb-5"></i>
        <h3 className="text-center text-white">Transparent Pricing</h3>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}