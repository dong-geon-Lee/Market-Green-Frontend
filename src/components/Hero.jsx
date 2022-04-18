import React from "react";
import styled from "styled-components";
import img from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  padding: 8rem 4.8rem 8rem 4.8rem;
  gap: 3.2rem;
`;

export const InfoBox = styled.div`
  & h1 {
    color: #495057;
    font-weight: 700;
    font-size: 4.8rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    letter-spacing: 1px;
  }

  & h3 {
    font-size: 2.4rem;
    margin-bottom: 5rem;
    line-height: 1.8;
    font-weight: 400;
    color: #868e96;
    letter-spacing: 1px;
  }
`;

export const BlankBox = styled.div``;
export const BtnBox = styled.div`
  display: flex;

  & button {
    border: none;
    padding: 1.6rem 2rem;
    font-family: inherit;
    font-size: 2.4rem;
    font-weight: 600;
    background-color: #82c91e;
    color: #f4fce3;
    border-radius: 9px;
  }

  & button:last-child {
    margin-left: 2rem;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <BlankBox></BlankBox>

        <InfoBox>
          <h1>
            Freshen the Air <br></br> in Your House
          </h1>

          <h3>
            we help realize your dreams in making a garden, let's start with
            small things that can change the world, so you can enjoy the fresh
            air forever
          </h3>

          <BtnBox>
            <button>Start find plant</button>
            <button>Learn more</button>
          </BtnBox>
        </InfoBox>
      </Wrapper>
    </Container>
  );
};

export default Hero;
