import React from "react";
import aboutPic from "./img/stevie.jpeg";

function About() {
    return(
        <div className="about">
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 px-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={aboutPic} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">About Rumours of Stevie</h1><hr/>
        <p class="lead">When Anna takes the stage she captures the true essence of Stevie Nicks, the iconic singer with her band covering songs from Fleetwood Mac and Stevie's solo career. She creates a mystical magical atmosphere and captures the heart and soul of Stevie in every performance, amazing her audiences everywhere with the heart and authenticity of the famous singer.</p>
      </div>
    </div>
  </div>
  </div>
    );
}

export default About;