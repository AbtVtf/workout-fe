import React from "react";
import { LayoutContainer, NavbarWrapper } from "../styles/styles";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
