import React, { useRef, useState } from "react";

import { Container, Row, Col, Mo, Modal } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Acasa",
  },
  {
    path: "/about",
    display: "Despre Noi",
  },
  {
    path: "/cars",
    display: "Masini",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [modal, setModal] = useState(false);
  const toggleMenu = () => setModal(!modal);
  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="nav__right">
              <div className="navigation" onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active nav__item" : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Modal isOpen={modal} toggle={toggleMenu} className="menu__modal">
        <h1 style={{ fontWeight: "bold", alignSelf: "center", marginTop: "20px" }}>YGG AUTO</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: '30px', padding: "50px " }}>
          {navLinks.map((item, index) => (
            <NavLink
              to={item.path}
              className={(navClass) =>
                navClass.isActive ? "nav__active nav__item__mobile" : "nav__item__mobile"
              }
              key={index}
              onClick={toggleMenu}
            >
              <h2 style={{ fontWeight: "bold", borderBottom: "1px solid #000d6b" }}>{item.display}</h2>
            </NavLink>
          ))}
        </div>
      </Modal>
    </header>
  );
};

export default Header;
