import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
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
`;

export const Text = styled.p`
  color: #e9ecef;
  font-size: 3rem;
  font-weight: 400;
  margin: 2.4rem 0 6.4rem 0;
  line-height: 1.5;
  letter-spacing: 1px;
  width: 60%;
  text-align: center;
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
