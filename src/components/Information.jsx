import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 20rem 3.2rem;
  margin: 0 auto;

  ${Mobile({
    padding: "10rem 3.2rem",
  })}
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
  background-repeat: no-repeat;

  ${Laptops({ width: "90%" })}
  ${Tablets({ width: "90%" })}
  ${Mobile({
    width: "80%",
    flexDirection: "column",
    backgroundSize: "cover",
    backgroundPosition: "top left",
  })}
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
  letter-spacing: 1.7px;
  color: #f76707;
  width: 100%;
  text-align: center;

  ${Laptops({ fontSize: "6rem", marginRight: "2rem", letterSpacing: "2px" })}

  ${Tablets({
    fontSize: "5.6rem",
    letterSpacing: "2px",
    lineHeight: "1.5",
  })}

  ${Mobile({
    fontSize: "4rem",
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
  position: relative;
  overflow: hidden;
  z-index: 3;

  ${Tablets({
    fontSize: "2.6rem",
    padding: "1.6rem 2rem",
    letterSpacing: "2px",
    lineHeight: "1.5",
  })}

  ${Mobile({
    fontSize: "2rem",
    padding: "1.4rem 1.6rem",
    letterSpacing: "2px",
    lineHeight: "1.5",
  })}

    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    background-color: #fff;
    transition: all 0.4s ease-in;
    opacity: 0;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: #82c91e;
    z-index: -1;
  }
`;

export const Div = styled.div``;

export const LinkBtn = styled.a``;

const Information = () => {
  const navigate = useNavigate();

  const notFoundLink = () => {
    navigate("/notFound");
  };

  return (
    <Container id="information">
      <MainText>Promotion</MainText>
      <Wrapper>
        <Content></Content>
        <InformationBox>
          <Title>Get More plants</Title>
          <Div onClick={() => notFoundLink()}>
            <Button>More Information</Button>
          </Div>
        </InformationBox>
      </Wrapper>
    </Container>
  );
};

export default Information;
