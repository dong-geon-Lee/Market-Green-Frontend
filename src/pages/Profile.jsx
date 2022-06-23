import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, tryAuth } from "../redux-toolkit/userSlice";
import { useEffect } from "react";

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
  font-size: 2.6rem;
  font-weight: 900;
  color: #5f3dc4;
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
  font-weight: 800;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  width: 100%;
  background-color: #fa5252;
  border-radius: 9px;

  &:hover {
    background-color: #f03e3e;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  cursor: pointer;
  margin: 1.2rem 0;
  background-color: #4ba87d;
  width: 100%;
  border-radius: 9px;

  & + div {
    background-color: #1c7ed6;

    &:hover {
      background-color: #228be6;
    }
  }

  & a {
    font-size: 1.8rem;
    font-weight: 800;
    font-family: inherit;
    text-decoration: none;
    letter-spacing: 1.75px;
    color: #fff;
  }

  &:hover {
    background-color: #40c057;
  }
`;

export const UserText = styled.p`
  font-size: 3rem;
  font-weight: 500;
  color: #343a40;
  height: 100%;
`;

const Profile = () => {
  const { _id, name, email } = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(tryAuth());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteUser({ id: _id }));

    alert("회원탈퇴 완료");
    navigate("/");
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
            <LinkBox>
              <Link to="/profileEdit">프로필 변경</Link>
            </LinkBox>
            <LinkBox>
              <Link to="/paymentResult">결제 내역</Link>
            </LinkBox>
            <Button type="submit">회원 탈퇴</Button>
          </BtnBox>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Profile;
