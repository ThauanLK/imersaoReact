import React from "react";
import Logo from "../../assets/LucasEhIncrivel.png";
import "./Header.css";
//import ButtonLink from "./buttonlink/index";
import Button from "../../components/Button/index";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo Lucas é Incrivel" />
        </Link>
        <Button as={Link} to="/cadastro/video" className="ButtonLink">
          Novo video
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
