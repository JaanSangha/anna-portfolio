import React from "react";

function Videos() {
    return(
        <div className="videos">
            <div class="container px-5">
  <div class="p-5 text-center rounded-3 videosBG">
    <h1 class="">Videos</h1>

    <div class="container text-center">
            <div class="col-lg-10 mx-auto">
            <p class="lead">Here is Anna performing ______ at _____.</p>

                <iframe className="basicpadding" title="Car Battle Demo Video" width= "80%" height="400"
				    src="https://www.youtube.com/embed/p5_z2eOHvbo">
				</iframe>
            </div>
        </div>
  </div>
</div>
        </div>

    );
}

export default Videos;