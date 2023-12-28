import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  /* Header menu list */
  let menuList = ["Home", "Quote", "Resturants", "Foods", "Contact"];
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    // header section
    <header className="header_container" data-aos="zoom-in">
      <div>
        <img src="https://flowbite.com/docs/images/logo.svg" />
        <h1>GeekFoods</h1>
      </div>
      <ul>
        {menuList.map((list) => {
          return <li>{list}</li>;
        })}
      </ul>
      <Button buttonText="Get started" id="headerButton"></Button>
    </header>
  );
}

export default Header;
