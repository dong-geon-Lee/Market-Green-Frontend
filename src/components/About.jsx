import React from "react";
import styled from "styled-components";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

export const Container = styled.div`
  max-width: 130rem;
  padding: 25rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8rem;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  display: inline-block;
  color: transparent;
  -webkit-background-clip: text;
`;

export const Section = styled.section`
  display: flex;
`;

export const Left = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  flex: 0.6;
  margin: 0 0 0 6rem;
`;

export const AboutBox = styled.div``;

export const SubHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  font-style: italic;
  line-height: 1.3;
  letter-spacing: 1px;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 1px;
  margin: 3rem 0;
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  transition: all 0.2s ease;
  outline-offset: 1.5rem;

  &:hover {
    outline: 1rem solid #55c57a;
    transform: scale(1.07) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.2);
    z-index: 20;
  }
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create your own beautiful and exciting garden!</Title>

        <Section>
          <Left>
            <AboutBox>
              <SubHeading>
                Come with us how to grow your plants to be better and healthier
              </SubHeading>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                aliquid consectetur, eum placeat odio tempora cum repudiandae
                asperiores repellendus est? Qui obcaecati delectus, laboriosam
                modi magnam autem voluptatibus aspernatur repellendus.
              </Text>
            </AboutBox>
          </Left>

          <Right>
            <ImageBox>
              <Image src={image1} alt="image1"></Image>
              <Image src={image2} alt="image2"></Image>
              <Image src={image3} alt="image3"></Image>
              <Image src={image4} alt="image4"></Image>
            </ImageBox>
          </Right>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default About;
