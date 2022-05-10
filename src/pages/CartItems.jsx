import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeFromCart } from "../redux-toolkit/cartSlice";

export const Container = styled.div`
  display: flex;
  background-color: beige;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const ImgBox = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductGroup = styled.div`
  padding: 2rem;
`;

export const InfoBox = styled.div`
  line-height: 1.6;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: red;
  margin-bottom: 1rem;
`;

export const Stock = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: blue;
  margin-bottom: 1rem;
`;

export const CartBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const CartBtn = styled.button`
  border: 1px solid grey;
  padding: 0.8rem 1rem;
  background-color: transparent;
  cursor: pointer;
  color: #4ba87d;
  font-size: 2rem;
  border-radius: 4px;
`;

export const CartText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  padding: 0 0.6rem;
`;

export const OrderBtnBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const OrderBtn = styled.button`
  border: none;
  background-color: #c3fae8;
  padding: 1.2rem 1.4rem;
  border-radius: 9px;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1971c2;
  cursor: pointer;
  margin-top: 1.4rem;

  & + button {
    background-color: #8ce99a;
    color: #343a40;
  }
`;

const CartItems = ({ product, title, desc, price, img, qty }) => {
  const dispatch = useDispatch();

  const removeItemCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Container>
      <Wrapper>
        <ImgBox>
          <Image src={img} />
        </ImgBox>

        <ProductGroup>
          <InfoBox>
            <Title>제목: {title}</Title>
            <Desc>설명: {desc}</Desc>
            <Price>가격: {price * qty}</Price>
            <Stock>개수: {qty}</Stock>
            <OrderBtn onClick={() => removeItemCart(product)}>x</OrderBtn>
          </InfoBox>
        </ProductGroup>
      </Wrapper>
    </Container>
  );
};

export default CartItems;
