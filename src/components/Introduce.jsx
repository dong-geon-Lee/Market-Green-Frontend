import React from "react";
import styled from "styled-components";
import { FaBook } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { Mobile, Tablets } from "../responsive";

export const Container = styled.div`
  max-width: 130rem;
  padding: 25rem 3.2rem 15rem 3.2rem;
  margin: 0 auto;

  ${Mobile({
    padding: "15rem 3.2rem 15rem 3.2rem",
  })}
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
  font-size: 5.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 3.2rem;

  ${Tablets({
    fontSize: "4.4rem",
    fontWeight: "700",
    letterSpacing: "1.8px",
    lineHeight: "1.5",
  })}

  ${Mobile({
    textAlign: "center",
    fontSize: "3.6rem",
    fontWeight: "700",
    letterSpacing: "1.5px",
    lineHeight: "1.5",
    padding: "0 3.6rem",
  })}
`;

export const Text = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #69db7c;

  ${Tablets({
    fontSize: "2.6rem",
    fontWeight: "700",
    letterSpacing: "1.5px",
    lineHeight: "1.5",
  })}

  ${Mobile({
    textAlign: "center",
    fontSize: "2.4rem",
    fontWeight: "700",
    letterSpacing: "1.3px",
    lineHeight: "1.5",
    padding: "0 2rem",
  })}
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

    ${Tablets({
      fontSize: "12rem",
    })}

    ${Mobile({
      fontSize: "14rem",
    })}
  }

  ${Tablets({
    justifyContent: "baseline",
    alignItems: "baseline",
  })}

  ${Mobile({
    flexDirection: "column",
    padding: "0 4.8rem",
  })}
`;

export const IconInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${Mobile({
    marginBottom: "6rem",
  })}
`;

export const TitleInfo = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.5;
  color: #212529;
  margin: 0.8rem 0;

  ${Tablets({
    fontSize: "3rem",
    fontWeight: "700",
    letterSpacing: "1px",
    margin: "2rem 0 1rem 0",
  })}

  ${Mobile({
    fontSize: "3.6rem",
    marginTop: "2rem",
    letterSpacing: "1px",
  })}
`;

export const TextInfo = styled.p`
  color: #adb5bd;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  width: 80%;
  text-align: center;

  ${Tablets({
    fontSize: "1.8rem",
    fontWeight: "700",
    letterSpacing: "1px",
  })}

  ${Mobile({
    fontSize: "2rem",
    letterSpacing: "0.5px",
  })}
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
    <Container id="intro">
      <Wrapper>
        <IntroBox>
          <Title>당신의 정원을 만들어보세요!</Title>
          <Text>
            "<Strong>마켓그린에서</Strong> 여러분의 식물을 얻으세요"
          </Text>
        </IntroBox>

        <ContentBox>
          <IconInfoBox>
            <FaBook></FaBook>
            <TitleInfo>Infomation</TitleInfo>
            <TextInfo>
              다양한 희귀식물에 대한 교육 콘텐츠를 제공합니다.
            </TextInfo>
          </IconInfoBox>

          <IconInfoBox>
            <FaSeedling></FaSeedling>
            <TitleInfo>Product</TitleInfo>
            <TextInfo>아름답고 예쁜 식물로 최고의 경험을 선사합니다.</TextInfo>
          </IconInfoBox>

          <IconInfoBox>
            <FaHandHoldingWater></FaHandHoldingWater>
            <TitleInfo>Advice</TitleInfo>
            <TextInfo>
              식물을 키우는 데 필요한 전문가의 조언을 제공합니다.
            </TextInfo>
          </IconInfoBox>
        </ContentBox>
      </Wrapper>
    </Container>
  );
};

export default Introduce;
