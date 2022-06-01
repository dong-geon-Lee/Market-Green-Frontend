import React from "react";
import styled from "styled-components";
import pic1 from "../assets/pic1.jpg";
import Carousel from "react-elastic-carousel";
import { userData } from "../data/productDummy";

export const Container = styled.div`
  max-width: 100rem;
  padding: 25rem 3.2rem 15rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: beige;
  padding: 2rem;
  border-radius: 0.9rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & .rec-carousel-wrapper {
    width: 74rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 2rem 4rem;
`;

export const UserImage = styled.div`
  width: 20rem;
  height: 16rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const UserTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const UserJob = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: gray;
`;

export const UserText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.7;
  letter-spacing: 0.5px;
  color: gray;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideBox = styled.div`
  background-color: orange;
  padding: 2rem;
  border-top-right-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
`;

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Customer Reviews</Title>

        <Content>
          <SlideBox></SlideBox>
          <UserBox>
            <Carousel>
              {userData.map((data) => (
                <UserInfo>
                  <UserImage>
                    <Image src={data.avatar} alt="pic1"></Image>
                  </UserImage>

                  <User>
                    <UserTitle>{data.name}</UserTitle>
                    <UserJob>{data.designation}</UserJob>
                    <UserText>{data.message}</UserText>
                  </User>
                </UserInfo>
              ))}
            </Carousel>
          </UserBox>
          <SlideBox></SlideBox>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
