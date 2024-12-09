import React from "react";
import About_bread from "./About_component/About_bread";
import Why_us from "./Home_component/Why_us";
import Our_service from "./About_component/Our_service";
import Royal_car from "./About_component/Royal_car";
import Offer from "./About_component/Offer";
import Brand_slider from "./About_component/Brand_slider";
export default function About()
{
    return(
        <>
        <About_bread></About_bread>
        <Why_us></Why_us>
        <Our_service></Our_service>
        <Royal_car></Royal_car>
        <Brand_slider></Brand_slider>
        <Offer></Offer>
        </>
    )
}