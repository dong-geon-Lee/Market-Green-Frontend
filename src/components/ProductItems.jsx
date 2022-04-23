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
    height: 20rem;
  }
`;

export const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 0;

  & h1 {
    grid-row: 1 / 2;
    grid-column: 1 / 6;
    width: 100%;
    color: darkblue;
    margin: 0;
    padding: 0.6rem 0;
  }

  & h3 {
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    width: 100%;
    color: green;
    font-size: 1.6rem;

    margin: 0;
    padding: 0;
  }

  & p {
    font-size: 1.8rem;
    font-weight: 900;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    color: black;
    width: 100%;
  }

  & h2 {
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    font-size: 1.8rem;
    color: red;
    margin: 0;
  }

  & h4 {
    grid-column: 4 / 6;
    grid-row: 3 / 4;
    font-size: 1.4rem;
    color: yellowgreen;
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
          <h3>{desc}</h3>
          <p>가격: {price}원</p>
          <h2>{rating}</h2>
          <h4>Like: {like}</h4>
        </InfoBox>
      </Left>
    </Container>
  );
};

export default ProductItems;
