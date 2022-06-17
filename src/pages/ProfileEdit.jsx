import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80");
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
  font-weight: 900;
  margin-bottom: 1.2rem;
  color: #4ba87d;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Button = styled.button`
  display: block;
  grid-column: 1 / -1;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #fa5252;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  width: 100%;
  border-radius: 9px;

  & + button {
    background-color: #4ba87d;
  }
`;

const ProfileEdit = () => {
  const { user } = useSelector((state) => state.user);
  const { _id } = useSelector((state) => state.user.user);

  console.log(user);
  console.log(_id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("password not correct!");
      return;
    }

    const newUser = {
      id: _id,
      name,
      email,
      password,
    };

    dispatch(updateUser(newUser));

    setUserData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    navigate("/profile");
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Box>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter name..."
            />
          </Box>
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
          <Box>
            <Label>Password Confirm</Label>
            <Input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Password Confirm..."
            />
          </Box>
          <BtnBox>
            <Button type="button" onClick={() => navigate(-1)}>
              뒤로가기
            </Button>
            <Button type="submit">변경하기</Button>
          </BtnBox>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProfileEdit;
