import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div``;

export const ImgBox = styled.div`
  display: flex;

  & img {
    display: block;
    width: 100%;
    height: 34rem;
  }
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 0;

  & h1 {
    grid-column: 1 / 3;
    width: 100%;
    color: darkblue;
    margin: 0;
    padding: 0.6rem 0;
  }

  & h3 {
    grid-column: 3 / 6;
    grid-row: 1 / 2;
    width: 100%;
    color: green;
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  & p {
    font-size: 1.8rem;
    font-weight: 900;
    font-style: italic;
    width: 100%;
    margin: 0;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    padding: 0;
  }

  & h2 {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    font-size: 1.8rem;
    color: red;
    margin: 0;

    display: block;
  }

  & h4 {
    font-size: 1.4rem;
    color: gold;
    margin: 0;
    padding: 0;
  }
`;

const ProductItems = ({ title, desc, price, rating, like, img }) => {
  return (
    <Container>
      <Left>
        <ImgBox>
          <img src={img} alt="img" />
        </ImgBox>

        <InfoBox>
          <h1>제품명: {title}</h1>
          <h3>설명: {desc}</h3>
          <p>가격: {price}원</p>
          <h2>{rating}</h2>
          <h4>Like: {like}</h4>
        </InfoBox>
      </Left>
    </Container>
  );
};

export default ProductItems;
