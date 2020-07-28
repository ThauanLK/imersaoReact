import React from "react";
import Menu from "../Header/index";
import Footer from "../Footer/index";

function Layout(props) {
  return (
    <div>
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
