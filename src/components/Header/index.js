import React from "react";
import Logo from "../../assets/LucasEhIncrivel.png";
import "./Header.css";
//import ButtonLink from "./buttonlink/index";
import Button from "../../components/Button/index";

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Logo Lucas é Incrivel" />
        </a>
        <Button as="a" href="/" className="ButtonLink">
          Novo video
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
