import React from "react";
import Cover from "./Cover";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Cover />
            <Navbar />
            <About />
            <Footer />
        </div>
        );
}

export default Home;