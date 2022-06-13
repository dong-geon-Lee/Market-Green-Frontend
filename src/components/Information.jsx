import React from "react";
import styled from "styled-components";
import { smallMobile } from "../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 20rem 3.2rem;
  margin: 0 auto;
`;

export const MainText = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url("../assets/boxed-water-is-better-M6eWvLb2EYY-unsplash (1).jpg");
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
  padding: 20rem 0;
  display: flex;

  ${smallMobile({ backgroundPosition: "top center", flexDirection: "column" })}
`;

export const Content = styled.div`
  flex: 1;
`;

export const InformationBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 6.4rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #f76707;
  width: 100%;
  text-align: center;

  ${smallMobile({
    fontSize: "5.6rem",
    letterSpacing: "2px",
    lineHeight: "1.5",
  })}
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 2rem 2.4rem;
  font-family: inherit;
  font-size: 3rem;
  font-weight: 700;
  background-color: #40c057;
  color: #f4fce3;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 6rem 0 3rem 0;
`;

const Information = () => {
  return (
    <Container id="promotion">
      <MainText>Promotion</MainText>
      <Wrapper>
        <Content></Content>
        <InformationBox>
          <Title>Get More plants</Title>
          <Button>Go to Shopping</Button>
        </InformationBox>
      </Wrapper>
    </Container>
  );
};

export default Information;
