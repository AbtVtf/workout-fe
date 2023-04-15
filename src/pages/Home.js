import React from "react";
import styled from "styled-components";
import { Card, PageContainer, Text, Title } from "../styles/styles";

const Home = () => {
  return (
    <PageContainer>
      <Card>
        <Title>
          Track your progress, access personalized workout plans, and stay
          motivated with our easy-to-use gym app.
        </Title>
      </Card>
      <Card>
        <Title>Get Started ➕</Title>
        <Text>This card does jackshit </Text>
      </Card>
    </PageContainer>
  );
};

export default Home;
