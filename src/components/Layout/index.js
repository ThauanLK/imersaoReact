import React from "react";
import Menu from "../Header/index";
import Footer from "../Footer/index";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function Layout(props) {
  return (
    <React.Fragment>
      <Menu />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
