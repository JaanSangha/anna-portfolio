import React from "react";
import Pic1 from "./img/AnnaSinging.png";
import Pic2 from "./img/AnnaSinging2.png";
import Pic3 from "./img/anna.png";

function Gallery() {
    return(
        <div class="gallery">
        <div class="lightbox">
  <div class="row">
    <div class="col-lg-6 pb-2">
      <img
        src={Pic1}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
        alt="Table Full of Spices"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
      <img
        src={Pic2}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
        alt="Coconut with Strawberries"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6">
      <img
        src={Pic3}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        alt="Dark Roast Iced Coffee"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
  </div>
</div>
</div>
    );
}

export default Gallery;