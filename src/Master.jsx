import React from "react";
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Blog from "./Blog";
export default function Master()
{
    return(
        <>
        <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
        </Router>
        </>
    )
}