import styled from "styled-components";
import { marginBottom } from "./styleConstants";

const Glassmorph = `
background: rgba(255, 255, 255, 0.6);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
`;

// const Glassmorph = `background: rgba( 14, 14, 14, 0.4 );
// box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
// backdrop-filter: blur( 15px );
// -webkit-backdrop-filter: blur( 15px );
// `;

const TextColor = "black";

export const AppBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgb(37, 150, 190);
  background: linear-gradient(
    0deg,
    rgba(37, 150, 190, 1) 0%,
    rgba(9, 9, 121, 1) 91%,
    rgba(0, 7, 9, 1) 100%
  );
`;

export const TransparentInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  width: 100%;
  height: 30px;
  padding: 0;
  margin: 0;
  outline: none;
  color: ${TextColor};
  padding-left: 10px;
  font-size: 18px;
  ::placeholder {
    color: ${TextColor};
    font-size: 18px;
  }
  &:focus,
  &:hover {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  }
`;

export const Card = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  gap: 15px;
  ${Glassmorph};
`;

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: ${TextColor};
`;

export const Subtitle = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: ${TextColor};
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${TextColor};
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  color: white;
  color: #262729;
  z-index: 10;
  border-radius: 0px 0 16px 16px;
  height: 60px;
  ${Glassmorph};
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10000;
  margin-bottom: ${marginBottom};
`;

export const Image = styled.img`
  width: 170px;
  align-self: center;
  border-radius: 20%;
  margin-bottom: 10px;
  border: 1px solid #666869;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CompleteButton = styled.button`
  height: 40px;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-self: center;
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
