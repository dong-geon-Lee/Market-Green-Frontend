import React from "react";
import styled from "styled-components";
import { Mobile, Tablets } from "../responsive";

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

  ${Tablets({
    backgroundPosition: "top left",
  })}

  ${Mobile({
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

  ${Tablets({
    fontSize: "6rem",
    textAlign: "center",
    letterSpacing: "2.2px",
    width: "80%",
  })}

  ${Mobile({
    fontSize: "5rem",
    textAlign: "center",
    letterSpacing: "2.5px",
  })}
`;

export const Text = styled.p`
  color: #e9ecef;
  font-size: 3rem;
  font-weight: 400;
  margin: 2.4rem 0 6.4rem 0;
  line-height: 1.8;
  letter-spacing: 1px;
  width: 75%;
  text-align: center;

  ${Tablets({
    fontSize: "2.6rem",
    textAlign: "center",
    letterSpacing: "2px",
    lineHeight: "1.5",
    padding: "0 2rem",
  })}

  ${Mobile({
    width: "100%",
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

export const Atag = styled.a`
  scroll-behavior: smooth;

  & + a {
    margin-left: 2rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 1.6rem 2rem;
  font-family: inherit;
  font-size: 2.4rem;
  font-weight: 700;
  background-color: #40c057;
  color: #f4fce3;
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  ${Mobile({
    fontSize: "2.4rem",
    fontWeight: "500",
    padding: "1.4rem 1.8rem",
  })}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 40%;
    background-color: #fff;
    transition: all 0.4s ease-in;
    opacity: 0;
  }

  &:hover::before {
    width: 150rem;
    height: 60rem;
    opacity: 1;
    background-color: #82c91e;
  }

  &:hover {
    background-color: #2f9e44;
    transform: translateY(-0.2rem);
  }

  & + button {
    margin-left: 3.2rem;
    background-color: #a9e34b;

    &:hover {
      background-color: #82c91e;
    }
  }
`;

const Hero = () => {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");

      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);

        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  return (
    <Container id="hero">
      <Wrapper>
        <InfoBox>
          <Title>Freshen the Air in Your House</Title>

          <Text>
            we help realize your dreams in making a garden, let's start with
            small things that can change the world
          </Text>

          <BtnBox>
            <Atag href="#products">
              <Button>Start find plant</Button>
            </Atag>

            <Atag href="#information">
              <Button>Learn more</Button>
            </Atag>
          </BtnBox>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default Hero;
