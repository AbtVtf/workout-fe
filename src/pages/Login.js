import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, register } from "../features/auth/authSlice";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContainer, CompleteButton, PageContainer } from "../styles/styles";

const Container = styled.div`
  width: 350px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: grey;
  box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%),
    inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
`;

const Slider = styled.div`
  width: 200%;
  position: relative;
  transition: transform ease-out 0.3s;
  display: flex;
`;

const RegisterToggle = styled.input.attrs({
  id: "register_toggle",
  type: "checkbox",
})`
  display: none;

  &:checked + ${Slider} {
    transform: translateX(-50%);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 1.5em 3em;
  width: 50%;
`;

const Title = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 2em;
`;

const FormControl = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transition: transform ease 0.2s;
  transform: translate(0%, -50%);
  font-size: 0.75em;
  user-select: none;
  pointer-events: none;
  color: #b0b0b0;
`;

const Input = styled.input`
  width: 90%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: box-shadow ease 0.2s;
  box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%),
    inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;

  &:focus,
  &:valid {
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%),
      inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
  }

  &:focus + ${Label}, &:valid + ${Label} {
    transform: translate(-150%, -50%);
  }
`;

const BottomText = styled.span`
  font-size: 14px;
`;

const Switch = styled.label`
  font-weight: 700;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register({ username: username, password: password }));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (error === null) {
      dispatch(login({ username, password }));
    }
  }, [error]);

  return (
    <AuthContainer>
      <Container>
        <RegisterToggle />
        <Slider>
          <Form>
            <Title>Login</Title>
            <FormControl>
              <Input
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Label>Username</Label>
            </FormControl>
            <FormControl>
              <Input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Label>Password</Label>
            </FormControl>
            <CompleteButton onClick={(e) => handleLogin(e)}>
              Login
            </CompleteButton>
            <BottomText>
              Don't have an account?{" "}
              <Switch htmlFor="register_toggle">Sign Up</Switch>
            </BottomText>
          </Form>
          <Form>
            <Title>Sign Up</Title>
            <FormControl>
              <Input
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <Label>Username</Label>
            </FormControl>

            <FormControl>
              <Input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Label>Password</Label>
            </FormControl>
            <CompleteButton
              onClick={(e) => {
                handleSignUp(e);
              }}
            >
              <Switch htmlFor="register_toggle"></Switch>
              Sign Up
            </CompleteButton>
            <BottomText>
              Already have an account?{" "}
              <Switch htmlFor="register_toggle">Sign In</Switch>
            </BottomText>
          </Form>
        </Slider>
      </Container>
    </AuthContainer>
  );
};

export default Login;
