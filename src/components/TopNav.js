import React from "react";
import empty from "../assets/images/dumbbell-empty.png";
import full from "../assets/images/dumbbell-full.png";
import { Icon, LogoImage, NavbarContainer } from "../styles/styles";
import back from "../assets/images/back.png";
import { useNavigate } from "react-router-dom";

const TopNav = ({ counter, length }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <Icon src={back} onClick={() => navigate(-1)} />
      {Array.from({ length }).map((_, index) => {
        if (index < counter) {
          return <Icon src={full} key={`full-${index}`} />;
        } else {
          return <Icon src={empty} key={`empty-${index}`} />;
        }
      })}
    </NavbarContainer>
  );
};

export default TopNav;
