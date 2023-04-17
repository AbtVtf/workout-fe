import styled, { keyframes } from "styled-components";

const Glassmorph = `
background: rgba(255, 255, 255, 0.6);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
`;

const marginBottom = "0px";

const gap = "15px";
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
  /* background: rgb(37, 150, 190);
  background: linear-gradient(
    0deg,
    rgba(37, 150, 190, 1) 0%,
    rgba(9, 9, 121, 1) 91%,
    rgba(0, 7, 9, 1) 100%
  ); */
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
  /* padding-left: 10px; */
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

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gap};
  padding-bottom: 40px;
  /* height: ${window.innerHeight}px; */
`;

export const AuthContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  gap: ${gap};
  padding-bottom: 40px;
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: ${TextColor};
`;

export const Subtitle = styled.span`
  font-size: 20px;
  font-weight: 500;
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
  border-radius: 0px 0 16px 16px;
  height: 60px;
  width: 100%;
  z-index: 80;
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

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

export const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: ${marginBottom};
`;

export const Image = styled.img`
  min-height: 180px;
  width: 180px;
  align-self: center;
  border-radius: 16px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: left;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CompleteButton = styled.button`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 14px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  font-weight: 600;
  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
  &:disabled {
    background: grey;
  }
`;

export const ExCard = styled.div`
  width: 80vw;
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  gap: ${gap};
  /* background-color: #f7f7f7; */
  ${Glassmorph}
`;

export const Card = styled.div`
  width: 80vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  gap: ${gap};
  ${Glassmorph};
`;

export const Horizontal = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 3px 1px rgba(209, 209, 209, 1);
  -moz-box-shadow: 0px 0px 3px 1px rgba(209, 209, 209, 1);
  box-shadow: 0px 0px 3px 1px rgba(209, 209, 209, 1);
`;

export const WeightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const Shaker = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  animation: ${shakeAnimation} 0.5s infinite;
`;

export const IconNumber = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
`;

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
