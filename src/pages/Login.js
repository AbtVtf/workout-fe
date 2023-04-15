import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/optilogo.png";
import { Image, PageContainer, Subtitle } from "../styles/styles";
import { Card, CompleteButton, TransparentInput } from "../styles/styles";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <PageContainer>
      <Card>
        <Image src={logo} />
        <Form onSubmit={handleSubmit}>
          <TransparentInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <TransparentInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <Subtitle>
            Maximize Your Gains
            <br /> Optimize Your Life
          </Subtitle>
          <CompleteButton type="submit">Start now</CompleteButton>
        </Form>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Card>
    </PageContainer>
  );
};

export default Login;
