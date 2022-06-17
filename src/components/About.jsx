import React from "react";
import styled from "styled-components";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import { Mobile, Tablets, Laptops } from "../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 25rem 3.2rem;
  margin: 0 auto;

  ${Mobile({
    padding: "12rem 3.2rem",
  })}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8rem;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  display: inline-block;
  color: transparent;
  -webkit-background-clip: text;
  width: 100%;

  ${Laptops({
    fontSize: "3.8rem",
    textAlign: "center",
  })}

  ${Tablets({
    fontSize: "3.6rem",
    textAlign: "center",
    lineHeight: "1.7",
    padding: "0 6rem",
    marginBottom: "4rem",
    letterSpacing: "1.8px",
  })}

  ${Mobile({
    fontSize: "3rem",
    textAlign: "left",
    lineHeight: "1.7",
    padding: "0 4rem",
    marginBottom: "4rem",
    letterSpacing: "1.5px",
  })}
`;

export const Section = styled.section`
  display: flex;

  ${Mobile({
    flexDirection: "column",
  })}
`;

export const Left = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;

  ${Mobile({
    flex: "1",
    textAlign: "center",
  })}
`;

export const Right = styled.div`
  flex: 0.6;
  margin: 0 0 0 6rem;

  ${Mobile({
    flex: "1",
    margin: "0",
  })}
`;

export const AboutBox = styled.div`
  & p:last-child {
    text-align: right;
    margin-right: 3.6rem;
    font-weight: 700;

    ${Mobile({
      width: "100%",
      margin: "2rem 0",
    })}
  }
`;

export const SubHeading = styled.h2`
  font-size: 2.4rem;
  font-weight: 800;
  font-style: italic;
  line-height: 1.7;
  letter-spacing: 1px;

  ${Laptops({
    fontSize: "2.6rem",
    textAlign: "left",
    lineHeight: "1.7",
    letterSpacing: "1.5px",
  })}

  ${Tablets({
    fontSize: "2.3rem",
    textAlign: "center",
    lineHeight: "1.5",
    letterSpacing: "1.5px",
  })}

  ${Mobile({
    fontSize: "2.2rem",
    padding: "0 3rem",
    lineHeight: "1.5",
  })}
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 1.2px;
  margin: 3rem 0;

  ${Laptops({
    fontSize: "1.8rem",
    textAlign: "left",
    lineHeight: "1.7",
    letterSpacing: "1.7px",
  })}

  ${Tablets({
    fontSize: "1.6rem",
    fontWeight: "500",
    textAlign: "left",
    lineHeight: "1.7",
    letterSpacing: "1.5px",
  })}

  ${Mobile({
    padding: "0 8rem",
    lineHeight: "1.6",
    letterSpacing: "1.5px",
    textAlign: "left",
  })}
`;

export const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  ${Laptops({
    gap: "2rem",
  })}

  ${Tablets({
    gap: "2rem",
  })}

  ${Mobile({
    gridTemplateColumns: "repeat(1,1fr)",
    gridTemplateRows: "repeat(1,1fr)",
    gap: "4rem",
    marginTop: "3.2rem",
    width: "100%",
    height: "100%",
    padding: "0 4rem",
  })}
`;

export const Image = styled.img`
  width: 100%;
  height: 22rem;
  object-fit: cover;
  outline-offset: 1.5rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    outline: 1rem solid #55c57a;
    transform: scale(1.07) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.2);
    z-index: 20;

    ${Mobile({
      outline: "none",
      transform: "scale(1.03) translateY(-0.2rem)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      zIndex: "3",
    })}
  }

  ${Tablets({
    height: "24rem",
  })}

  ${Mobile({
    padding: "0 4rem",
    height: "30rem",
  })}
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Title>Create your own beautiful and exciting garden!</Title>

        <Section>
          <Left>
            <AboutBox>
              <SubHeading>
                "Come with us how to grow your plants to be better and
                healthier"
              </SubHeading>
              <Text>
                We have a variety of products for your own garden! <br></br>
                Market green has hundreds of rare and eco-friendly plants. We
                want you to feel joy and peace!
              </Text>

              <Text>- MarketGreen</Text>
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
