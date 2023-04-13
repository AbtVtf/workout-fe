import React from "react";
import styled from "styled-components";
import BottomNavbar from "./BottomNav";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  bottom: 0;
  /* bottom: 0; */
  /* left: 0; */
  /* right: 0; */
`;

const ContentWrapper = styled.div`
  padding-bottom: 60px; // Adjust to the height of your navbar
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>{children}</ContentWrapper>
      <NavbarWrapper>
        <BottomNavbar />
      </NavbarWrapper>
    </LayoutContainer>
  );
};

export default Layout;
