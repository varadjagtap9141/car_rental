import React from "react";
import Section1 from "./Home_component/Section1";
import Car_List from "./Home_component/Car_List";
import Why_us from "./Home_component/Why_us";
import Counter from "./Home_component/Counter";
export default function Home()
{
    return(
        <>
        <Section1></Section1>
        <Car_List></Car_List>
        <Why_us></Why_us>
        <Counter></Counter>
        </>
    )
}