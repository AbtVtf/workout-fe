import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { carMock } from "./mockData.tsx";
import { useState } from "react";
import { useEffect } from "react";


const CarListing = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://localhost:3000/cars');
      if (response.ok) {
        const data = await response.json();
        console.log({ data })
        console.log({ carMock })
        setCarsData(data);
      } else {
        console.error('Failed to fetch cars:', response.status);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };
  return (
    <Helmet title="Cars">
      <CommonSection title="Masini" />

      <section>
        <Container>
          <Row>


            {carsData?.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
