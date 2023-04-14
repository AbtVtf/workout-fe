import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #333;
  color: white;
  color: #262729;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ExerciseCardContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 16px;
  padding: 20px 20px 50px 20px;
  color: #262729;

  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #b1b3b5;
`;

export const CenteredHeading = styled.h1`
  align-self: center;
  font-size: 28px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
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
  font-weight: 500;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: space-around;
`;

export const StatsText = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const WeightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 20px;
`;

export const WeightInput = styled.input`
  width: 35px;
  height: 27px;
  margin: 0;
  text-align: center;
  border: none;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 10px;
`;

export const CompleteButton = styled.button`
  height: 40px;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  align-self: center;
  border-radius: 10px;
  border: none;
  background-color: #208a16;
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const LastWeightHeading = styled.h2`
  font-weight: 400;
`;
