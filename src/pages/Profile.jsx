import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
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
  column-gap: 3.2rem;
  row-gap: 4.8rem;
  width: 45rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  align-items: center;
  justify-content: center;
  text-align: left;
  height: 100%;
`;

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: 900;
  color: #4ba87d;
  letter-spacing: 1px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`;

const Button = styled.button`
  display: block;
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
  width: 100%;

  & + button {
    background-color: #fa5252;
  }
`;

export const UserText = styled.p`
  font-size: 3rem;
  color: #343a40;
  height: 100%;
`;

const Profile = () => {
  const { name, email, password } = useSelector((state) => state.user.user);

  const onChange = (e) => {
    // setUserData((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    // e.preventDefault();
    // if (!email || !password) {
    //   alert("add email or password");
    //   return;
    // }
    // const newUser = {
    //   email,
    //   password,
    // };
    // dispatch(loginUser(newUser));
    // setUserData({
    //   email: "",
    //   password: "",
    // });
    // navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Box>
            <Label>Name</Label>
            <UserText>{name}</UserText>
          </Box>

          <Box>
            <Label>E-mail</Label>
            <UserText>{email}</UserText>
          </Box>

          <BtnBox>
            <Button type="submit">프로필 변경</Button>
            <Button type="submit">회원 탈퇴</Button>
          </BtnBox>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Profile;
