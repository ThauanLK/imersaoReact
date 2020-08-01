import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Header/index';
import Footer from '../Footer/index';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
  padding=${paddingAll}`}
`;

function Layout(props) {
  return (
    <>
      <Menu />
      <Main style={{ padding: props.paddingAll }}>{props.children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
