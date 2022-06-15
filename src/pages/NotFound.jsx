import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Mobile, Tablets, Laptops } from "../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 4.2rem;

  ${Tablets({
    padding: "0 2rem",
  })}
`;

export const Image = styled.img`
  max-width: 100%;
  height: 40rem;
  object-fit: cover;

  ${Tablets({
    objectFit: "contain",
    height: "30%",
  })}

  ${Mobile({
    width: "50rem",
    height: "30%",
  })}
`;

export const Button = styled.button`
  border: none;
  padding: 1.6rem 2rem;
  font-family: inherit;
  font-size: 2.4rem;
  font-weight: 700;
  background-color: #40c057;
  color: #f4fce3;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 7rem;
  width: 30%;

  &:hover {
    background-color: #2f9e44;
    opacity: 0.8;
    transform: scale(1.05);
  }

  & + button {
    margin-left: 3.2rem;
    background-color: #a9e34b;

    &:hover {
      background-color: #82c91e;
      opacity: 0.9;
    }
  }

  ${Laptops({
    marginTop: "5rem",
  })}

  ${Mobile({
    marginTop: "0rem",
  })}
`;

const NotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Wrapper>
        <Image src="../assets/page_ready.jpeg"></Image>
        <Button onClick={() => onClick()}>뒤로가기</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
