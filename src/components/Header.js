import React from "react";
import { NavLink } from "react-router-dom";


function Header() {

  function toggleDark() {
    let element = document.body
    // console.log(element.classList)
    element.classList.toggle("dark");
    let toggle = document.getElementById("toggle")
    if (toggle.innerHTML==="OFF") {
      toggle.innerText = "ON"} else {
        toggle.innerText = "OFF"
      }
    }


  return (
    <>
      <div className="header">
        <NavLink 
          to="/"
          activeStyle={{
            color: "#fff8dc"
          }}
          >
          <h1>CALL</h1> 
        </NavLink>
      </div>
      <div className="mode">
        Dark mode:            
        <span onClick={toggleDark} id="toggle">OFF</span>
      </div>
    </>
  );
}

export default Header;
