import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeFromCart } from "../redux-toolkit/cartSlice";

export const Wrapper = styled.div`
  display: flex;
  max-width: 130rem;
  margin: 0 auto;
  padding: 3.2rem 3.2rem;

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
  padding: 3rem;
`;

export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
`;

export const Image = styled.img`
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
  padding: 0.8rem;
  border-radius: 50%;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  display: flex;
  position: absolute;
  left: -1%;
  top: -2%;
  transform: translate(2%, 5%);

  & + button {
    background-color: #8ce99a;
    color: #343a40;
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

  return (
    <Wrapper>
      <ProductGroup>
        <OrderBtn onClick={() => removeItemCart(product)}>x</OrderBtn>
        <ImgBox>
          <Image src={`http://localhost:5000/${img}`} />
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
            <Price>{price}</Price>
          </PriceBox>
        </InfoBox>
      </ProductGroup>
    </Wrapper>
  );
};

export default CartItems;
