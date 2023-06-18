import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },


  {
    path: "/cars",
    display: "Car Listing",
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    YGG <br /> Auto
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Sunteți în căutarea mașinii perfecte sau doriți să vă actualizați vehiculul actual? Echipa noastră dedicată de experți auto este aici pentru a vă ajuta să găsiți cea mai bună opțiune pentru nevoile dvs.

              Ne angajăm să oferim un serviciu excepțional și o experiență de cumpărare fără stres. Vă invităm să vizitați showroom-ul nostru sau să ne contactați pentru a descoperi mai multe despre gama noastră de vehicule.
            </p>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Linkuri</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Sediu</h5>
              <p className="office__info">DN1A Centura de Est, Ploiesti 107072</p>
              <p className="office__info">Phone: 0737090340</p>

              <p className="office__info">Email: georgegoslan1987@yahoo.com</p>

              <p className="office__info">Office Time: 09:00 - 17:00</p>
            </div>
          </Col>



        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
