import React from "react";

function HeaderBar(){
    return(
<div class="container mt ">
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-0 shadow-lg">
   <span className="navbar-brand mb-0 h1">NameList</span>
      <ul className="navbar-nav">
        <li className="nav-item"> <a className ="nav-link" href="#">Home</a></li>
        <li className="nav-item"> <a  className ="nav-link"href="#">About</a></li>
        <li className="nav-item"> <a className ="nav-link" href="#">Contact us</a></li>
        <li className="nav-item"> <a  className ="nav-link"href="#">NameList </a></li>

      </ul>
  </nav>
</div>

    ); 
}
export default HeaderBar;