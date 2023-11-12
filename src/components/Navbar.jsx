import React from "react";

function Navbar() {
    return(
        <div className="navbar align-items-center justify-content-center py-5 col-12">
                    <ul class="nav nav-pills justify-content-center col-11">
                        <li class="nav-item border-end border-start"><a href="#top" class="nav-link">About</a></li>
                        <li class="nav-item border-end"><a href="#top" class="nav-link">Upcoming</a></li>
                        <li class="nav-item border-start border-end"><a href="#top" class="nav-link">Set List</a></li>
                        <li class="nav-item border-start border-end"><a href="#top" class="nav-link">Contact</a></li>
                    </ul>
        </div>
    );
}

export default Navbar;