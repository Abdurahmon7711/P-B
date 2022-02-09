import React from 'react';
import { useState, useEffect } from 'react';
import imglogo from '../imgs/logo.png'


const Nav = () => {

  const [openNav, setOpenNav] = useState(false)
  const [scrollY, setScrollY] = useState(0);
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const openNavbar = () => {
    setOpenNav(!openNav);
  }

  return (
    <div className="nav_box" >
      <div className="container">
        <div className={scrollY > 5 ? "nav_1 " : "nav"}>
        
          <div className="nav_logo">
            <img src={imglogo} className="nav__logo-img" />
            <div className="logo__text">
              <p>John <span className="   ">Doe</span></p>
              <p><span className="done">UX/UI</span> DESIGNER</p>
            </div>
          </div>

          <div className="nav_link">
            <ul id={openNav ? "nav22" : "nav11"} className="nav_link-ul">
              <li> <a href="#">home</a>     </li>
              <li> <a href="#about">about</a>    </li>
              <li> <a href="#service">services</a> </li>
              <li> <a href="#awesomes">works</a>    </li>
              <li> <a href="#teamid">team</a>     </li>
              <li> <a href="#">shop</a>     </li>
              <li> <a href="#contacts">contact</a>  </li>
              <li> <a href="#" className="hireme">hire me</a>  </li>
            </ul>
          </div>

          <div className="bars_nav" >
            <i className={openNav ? "fas fa-times" : "fas fa-bars"} onClick={openNavbar}></i>
            <i id="adduser" class="fas fa-user-plus"></i>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Nav;