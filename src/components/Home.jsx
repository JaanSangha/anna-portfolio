import React from "react";
import Cover from "./Cover";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Videos from "./Videos";
import Gallery from "./Gallery";

function Home() {
    return (
        <div>
            <Cover />
            <Navbar />
            <About />
            <Videos />
            <Gallery />
            <Contact />
            <Footer />
        </div>
        );
}

export default Home;