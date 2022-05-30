import React from "react";
import styled from "styled-components";
import { FaBook } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";

export const Container = styled.div`
  max-width: 130rem;
  padding: 25rem 3.2rem 15rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 9.6rem 0;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  letter-spacing: 1px;
  margin-bottom: 3.2rem;
`;

export const Text = styled.h1`
  font-size: 2.4rem;
  letter-spacing: 0.75px;
  color: #69db7c;
`;

export const Strong = styled.strong`
  color: #2f9e44;
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & svg {
    color: #2f9e44;
    font-size: 9.8rem;
  }
`;

export const IconInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleInfo = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.5;
  color: #212529;
  margin: 0.8rem 0;
`;

export const TextInfo = styled.p`
  color: #adb5bd;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  width: 80%;
  text-align: center;
`;

export const Icon = styled.div``;
export const LeftDetail = styled.div``;
export const LeftImgBox = styled.div``;
export const LeftImage = styled.img``;

export const RightCard = styled.div``;
export const RightInfo = styled.div``;
export const RightTitle = styled.div``;
export const RightText = styled.div``;
export const RightDetail = styled.div``;
export const RightImgBox = styled.div``;
export const RightImage = styled.img``;

const Introduce = () => {
  return (
    <Container>
      <Wrapper>
        <IntroBox>
          <Title>Start creating your own garden!</Title>
          <Text>
            "Order what you want at <Strong>MarketGreen</Strong>"
          </Text>
        </IntroBox>

        <ContentBox>
          <IconInfoBox>
            <FaBook></FaBook>
            <TitleInfo>Infomation</TitleInfo>
            <TextInfo>
              We provide educational content about various rare plants.
            </TextInfo>
          </IconInfoBox>

          <IconInfoBox>
            <FaSeedling></FaSeedling>
            <TitleInfo>Product</TitleInfo>
            <TextInfo>
              We provide the best experience with beautiful and pretty plants.
            </TextInfo>
          </IconInfoBox>

          <IconInfoBox>
            <FaHandHoldingWater></FaHandHoldingWater>
            <TitleInfo>Advice</TitleInfo>
            <TextInfo>
              We provide expert advice on how to grow and design plants.
            </TextInfo>
          </IconInfoBox>
        </ContentBox>
      </Wrapper>
    </Container>
  );
};

export default Introduce;
