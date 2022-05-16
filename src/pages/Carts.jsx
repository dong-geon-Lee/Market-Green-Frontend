import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../redux-toolkit/cartSlice";
import CartItems from "./CartItems";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 91vh;
  padding: 0 3.2rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3.2rem 3.2rem;

  & p {
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  & span {
    font-size: 2.4rem;
    font-weight: 700;
    margin-left: 1rem;
    letter-spacing: 0.3px;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #eee;
  width: 100%;
`;

export const TotalCartItem = styled.div`
  padding: 3.2rem;
  margin: 0 auto 1.6rem auto;
  background-color: #c5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 9px;
`;

export const CartButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartButton = styled.button`
  border: none;
  display: inline-block;
  width: 35%;
  padding: 1.6rem 1.6rem;
  margin: 2.4rem 4rem 0 4rem;
  cursor: pointer;
  background-color: #212529;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;

  & + button {
    background-color: #2f9e44;
  }
`;

const Carts = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const id = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (id && location.search) {
      dispatch(addToCart({ id, quantity }));
    }
  }, [dispatch, id, quantity]);

  return (
    <Container>
      <Group>
        <TotalCartItem>
          <h1>장바구니 ({cartItems.length})</h1>
        </TotalCartItem>
        {cartItems?.map((cart, index) => (
          <CartItems key={index} {...cart} qty={cart.quantity}></CartItems>
        ))}

        <Wrapper>
          <TotalBox>
            <p>TOTAL:</p>
            <span>
              <strong>
                {cartItems.reduce((acc, item) => {
                  return acc + item.quantity * item.price;
                }, 0)}{" "}
                원
              </strong>
            </span>
          </TotalBox>
        </Wrapper>

        <CartButtonGroup>
          <CartButton>쇼핑하기</CartButton>
          <CartButton>결제하기</CartButton>
        </CartButtonGroup>
      </Group>
    </Container>
  );
};

export default Carts;
