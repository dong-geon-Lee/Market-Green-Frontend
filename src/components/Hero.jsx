import React from "react";
import { GrEbay } from "react-icons/gr";
import styled from "styled-components";
import {
  desktops,
  Mobile,
  smallDesktops,
  smallTablets,
  Tablets,
  smallMobile,
} from "../responsive";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 8rem 4.8rem 8rem 4.8rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Plant+Dec+2019-+Dec+2020/basic-information-about-plants.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${smallMobile({
    backgroundPosition: "top left",
  })}
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #edf2ff;
  font-size: 7.4rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 1.6rem;
  letter-spacing: 2px;

  ${smallDesktops({ fontSize: "6rem" })}
  ${smallTablets({ fontSize: "4.8rem" })}
  ${Mobile({ fontSize: "3rem" })}

  ${smallMobile({
    width: "80%",
    textAlign: "center",
    fontSize: "5rem",
    letterSpacing: "2.5px",
  })}
`;

export const Text = styled.p`
  color: #e9ecef;
  font-size: 3rem;
  font-weight: 400;
  margin: 2.4rem 0 6.4rem 0;
  line-height: 1.5;
  letter-spacing: 1px;
  width: 75%;
  text-align: center;

  ${smallDesktops({ fontSize: "2.4rem" })}
  ${smallTablets({ fontSize: "2rem" })}
  ${Mobile({ fontSize: "1.8rem", width: "60%" })}
  
  ${smallMobile({
    width: "80%",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "1.7",
    letterSpacing: "1.5px",
    color: "#f8f9fa",
  })}
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

  ${smallDesktops({ fontSize: "2rem" })}
  ${Mobile({ fontSize: "1.6rem" })}

  ${smallMobile({
    fontSize: "2.4rem",
    fontWeight: "500",
    padding: "2rem 2.4rem",
  })}

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
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <InfoBox>
          <Title>Freshen the Air in Your House</Title>

          <Text>
            we help realize your dreams in making a garden, let's start with
            small things that can change the world
          </Text>

          <BtnBox>
            <Button>Start find plant</Button>
            <Button>Learn more</Button>
          </BtnBox>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default Hero;
