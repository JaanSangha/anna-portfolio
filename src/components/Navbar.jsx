import React from "react";

function Navbar() {
    return(
        <div className="navbar">
            <div class="container">
                <div class="d-flex justify-content-center py-5 col-12">
                    <ul class="nav nav-pills">
                        <li class="nav-item border-end border-start"><a href="#top" class="nav-link" aria-current="page">Home</a></li>
                        <li class="nav-item border-end"><a href="#top" class="nav-link">About</a></li>
                        <li class="nav-item border-end"><a href="#top" class="nav-link">Upcoming</a></li>
                        <li class="nav-item border-end"><a href="#top" class="nav-link">Set List</a></li>
                        <li class="nav-item border-end"><a href="#top" class="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;