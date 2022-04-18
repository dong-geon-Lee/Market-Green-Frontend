import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux-toolkit/userSlice";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1534054950205-cb5a7f00180a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 3.2rem;
  row-gap: 4.8rem;
  width: 40rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #4ba87d;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;
`;

const Button = styled.button`
  display: block;
  grid-column: 1 / -1;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #4ba87d;
  text-transform: uppercase;
  letter-spacing: 1.75px;
`;

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("add email or password");
      return;
    }

    const newUser = {
      email,
      password,
    };

    dispatch(loginUser(newUser));

    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Box>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email..."
            />
          </Box>
          <Box>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password..."
            />
          </Box>

          <Button type="submit">로그인</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
