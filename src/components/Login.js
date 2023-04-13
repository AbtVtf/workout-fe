import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/optilogo.png";

const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 250px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(250, 238, 238, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #0f58ae;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 2px;
  &:hover {
    background-color: #0056b3;
  }
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
      navigate("/workouts");
    }
  }, [token]);

  return (
    <Container>
      <Card>
        <img src={logo} style={{ width: "200px" }} />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <p style={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}>
            Maximize Your Gains
            <br /> Optimize Your Life
          </p>
          <Button type="submit">Start now</Button>
        </Form>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </Card>
    </Container>
  );
};

export default Login;
