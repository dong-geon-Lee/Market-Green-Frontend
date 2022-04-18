import React from "react";
import styled from "styled-components";
import img1 from "../assets/img7.jpg";
import img2 from "../assets/img6.jpg";

export const Container = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IntroBox = styled.div`
  width: 100%;
  text-align: center;
  padding: 9.6rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
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

export const ContentBox = styled.div``;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const LeftCard = styled.div`
  position: relative;
  display: flex;
`;

export const LeftInfo = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
`;

export const LeftTitle = styled.div``;
export const LeftText = styled.div``;
export const LeftDetail = styled.div``;
export const LeftImgBox = styled.div``;
export const LeftImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const RightCard = styled.div`
  position: relative;
  display: flex;
`;

export const RightInfo = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
`;

export const RightTitle = styled.div``;
export const RightText = styled.div``;
export const RightDetail = styled.div``;
export const RightImgBox = styled.div``;

export const RightImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Introduce = () => {
  return (
    <Container>
      <Wrapper>
        <IntroBox>
          <Title>회사소개</Title>
          <Text>
            "원하는 식물을 <Strong>MarketGreen</Strong> 에서 편안하게
            주문하세요!"
          </Text>
        </IntroBox>

        <ContentBox>
          <Card>
            <LeftCard>
              <LeftInfo>
                <LeftText>LIVING BEAUTIFULLY WITHNATURE</LeftText>
                <LeftTitle>아름답게 자연과 함께 삶</LeftTitle>
                <LeftDetail>
                  MarketGreen 과 함께, 푸른 것으로, 맘껏 푸르러지다.
                </LeftDetail>
              </LeftInfo>

              <LeftImgBox>
                <LeftImage src={img1}></LeftImage>
              </LeftImgBox>
            </LeftCard>

            <RightCard>
              <RightImgBox>
                <RightImage src={img2}></RightImage>
              </RightImgBox>
              <RightInfo>
                <RightText>PLANT SHOPPING PURDA MARKET</RightText>
                <RightTitle>
                  식물쇼핑 플랜테리어 플랫폼 ‘MarketGreen’ 은
                </RightTitle>
                <RightDetail>
                  누구나 쉽게 일상 속에서 자연을 접하는 다양한 방식을 만들어
                  갑니다.
                </RightDetail>
              </RightInfo>
            </RightCard>
          </Card>
        </ContentBox>
      </Wrapper>
    </Container>
  );
};

export default Introduce;
