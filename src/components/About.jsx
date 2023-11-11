import React from "react";
import aboutPic from "./img/stevie.jpeg";

function About() {
    return(
        <div className="about">
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={aboutPic} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-decoration-underline">About Stevie Nicks</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam sit amet nisl purus in mollis nunc. Rhoncus aenean vel elit scelerisque mauris. Adipiscing diam donec adipiscing tristique risus. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Rutrum tellus pellentesque eu tincidunt tortor. Fames ac turpis egestas sed tempus urna et pharetra. Libero volutpat sed cras ornare arcu dui vivamus arcu. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Leo urna molestie at elementum eu facilisis sed odi.</p>
      </div>
    </div>
  </div>
  </div>
    );
}

export default About;