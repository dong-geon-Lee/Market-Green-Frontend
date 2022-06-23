import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromCart } from "../redux-toolkit/cartSlice";
import { Laptops, Mobile, Tablets } from "../responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 130rem;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;
  width: 100%;
  overflow: hidden;
`;

export const ProductGroup = styled.div`
  display: flex;
  position: relative;
  background-color: beige;
  border-radius: 1rem;
`;

export const ImgBox = styled.div`
  flex: 0.3;
  width: 35vw;
  height: 100%;
  margin: 2rem;
  display: flex;
  align-items: center;

  ${Laptops({
    width: "35vw",
    height: "13vh",
  })}

  ${Tablets({
    width: "33vw",
    height: "11vh",
  })}

  ${Mobile({
    width: "33vw",
    height: "9vh",
  })}
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

export const Image = styled.img`
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
`;

export const Price = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
`;

export const Stock = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  color: #adb5bd;
  margin-bottom: 1rem;
  text-transform: uppercase;

  & + p {
    color: #212529;
    font-weight: 700;
  }

  ${Mobile({
    fontSize: "1.4rem",
  })}
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
`;

export const OrderBtn = styled.button`
  border: none;
  background-color: #ff6b6b;
  padding: 1rem;
  border-radius: 50%;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  display: flex;
  position: absolute;
  left: -1.5%;
  top: -5%;
  transform: translate(2%, 5%);

  & + button {
    background-color: #8ce99a;
    color: #343a40;
  }

  &:hover {
    background-color: red;
    font-weight: 800;
  }
`;

export const StockBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-top: 1rem;
  }
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;

  & p {
    margin-top: 1rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;

  & p {
    margin-top: 1rem;
  }
`;

const CartItems = ({ product, title, price, img, qty }) => {
  const dispatch = useDispatch();

  const removeItemCart = (product) => {
    dispatch(removeFromCart(product));
  };

  let prices = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let total = (price * qty)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Wrapper>
      <ProductGroup>
        <OrderBtn onClick={() => removeItemCart(product)}>x</OrderBtn>
        <ImgBox>
          <Image src={`http://localhost:5000/${img}`} alt="make" />
        </ImgBox>

        <InfoBox>
          <TitleBox>
            <Title>product</Title>
            <Title>{title}</Title>
          </TitleBox>
          <StockBox>
            <Stock>Quantity</Stock>
            <Stock>{qty}</Stock>
          </StockBox>
          <PriceBox>
            <Price>Price</Price>
            <Price>{prices}</Price>
          </PriceBox>
          <PriceBox>
            <Price>Total</Price>
            <Price>{total}</Price>
          </PriceBox>
        </InfoBox>
      </ProductGroup>
    </Wrapper>
  );
};

export default CartItems;
