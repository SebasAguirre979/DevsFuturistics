import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
       
        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
           
            <span class="text-muted">&copy; 2021 Dev Futuristics</span>
          </div>
      
          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><Link to="/">Trello</Link></li>
            <li class="ms-3"><Link to="/">GitHub</Link></li>
            <li class="ms-3"><Link to="/">Mintic</Link></li>
          </ul>
        </footer>
      </div>

    )
}

export default Footer