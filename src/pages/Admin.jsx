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
            const response = await fetch('https://auto-backend-node-production.up.railway.app/cars');
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
            <CommonSection title="Masini" />

            <section>
                <Container>
                    <Row>
                        {carsData?.map((item) => (
                            <CarItem item={item} key={item.id} isDelete={true} />
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Admin;
