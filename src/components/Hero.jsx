import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80");
  background-position: center;
  background-size: 100% 110%;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  padding: 8rem 4.8rem 8rem 4.8rem;
  gap: 3.2rem;
`;

export const InfoBox = styled.div`
  padding: 0 4.8rem;
  display: flex;
  flex-direction: column;

  & h1 {
    color: #495057;
    font-weight: 700;
    font-size: 7.4rem;
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
          <h1>Freshen the Air in Your House</h1>

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
