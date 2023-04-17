import React from "react";
import { LayoutContainer, NavbarWrapper } from "../styles/styles";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarWrapper style={{ zIndex: 10 }}>
        <Navbar />
      </NavbarWrapper>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
