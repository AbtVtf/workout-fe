import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";
import { useState } from "react";
import { useEffect } from "react";
import CarItem from "../components/UI/CarItem";
import CarEditor from "../components/UI/CarEditor";

const Admin = () => {
    const [pass, setPass] = useState("")
    const [carsData, setCarsData] = useState([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await fetch('http://localhost:3000/cars');
            if (response.ok) {
                const data = await response.json();

                setCarsData(data);
            } else {
                console.error('Failed to fetch cars:', response.status);
            }
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };
    return (
        <>
            <CarEditor />
            {pass === "P@554YGG" ? <Helmet title="Admin">
                <CarEditor />
                {/* <Container>
                    <Row>
                        {carsData?.map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container> */}
            </Helmet> :
                <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ marginRight: "40px" }}>Admin Pass:</h2>
                    <input onChange={(event) => setPass(event.target.value)}></input>
                </div>}
        </>
    );
};

export default Admin;
