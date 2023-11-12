import React from "react";
import Cover from "./Cover";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Videos from "./Videos";

function Home() {
    return (
        <div>
            <Cover />
            <Navbar />
            <About />
            <Videos />
            <Contact />
            <Footer />
        </div>
        );
}

export default Home;