import React, { useEffect } from "react";
import styled from "styled-components";
import BottomNavbar from "./BottomNav";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  bottom: 0;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
      {!window.location.href.split("/").includes("auth") && (
        <NavbarWrapper>
          <BottomNavbar />
        </NavbarWrapper>
      )}
    </LayoutContainer>
  );
};

export default Layout;
