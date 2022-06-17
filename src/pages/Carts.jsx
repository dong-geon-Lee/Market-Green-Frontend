import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../redux-toolkit/cartSlice";
import CartItems from "./CartItems";
import styled from "styled-components";
import { Laptops, Mobile, Tablets } from "../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 9.6rem 3.2rem;
  margin: 4rem 0;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3.2rem 3.2rem;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #eee;
  width: 100%;
  align-items: center;
  padding: 1rem 0;
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

export const CartLink = styled(Link)`
  display: inline-block;
  width: 50%;
  padding: 2.4rem;
  margin: 2.4rem 4rem;
  cursor: pointer;
  background-color: #212529;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  border-radius: 9px;

  & + a {
    background-color: #2f9e44;
  }

  &:hover {
    background-color: grey;
    transform: scale(1.03);
    font-weight: 800;
  }

  & + a:hover {
    background-color: green;
    transform: scale(1.03);
    font-weight: 800;
  }

  ${Laptops({
    width: "44%",
    margin: "2.4rem 2rem",
  })}

  ${Tablets({
    width: "43%",
    margin: "2.4rem 2rem",
  })}

  ${Mobile({
    width: "45%",
    margin: "2.4rem 2rem",
  })}
`;

export const TotalText = styled.p`
  display: inline-block;
  font-size: 2.6rem;
  font-weight: 700;
  margin-left: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin-bottom: 0.6rem;
  color: #ff6b6b;
`;

export const Total = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5;
  color: blue;
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
          <h1>장바구니 ({cartItems ? cartItems?.length : 0})</h1>
        </TotalCartItem>

        {cartItems.length === 0 ? (
          <>
            <h1>카트에 제품을 추가해주세요</h1>
            <CartButtonGroup>
              <CartLink to="/" style={{ width: "100%" }}>
                쇼핑하기
              </CartLink>
            </CartButtonGroup>
          </>
        ) : (
          <>
            {cartItems?.map((cart, index) => (
              <CartItems key={index} {...cart} qty={cart.quantity}></CartItems>
            ))}

            <Wrapper>
              <TotalBox>
                <Total>TOTAL :</Total>
                <TotalText>
                  {cartItems
                    ?.reduce((acc, item) => {
                      return acc + item.quantity * item.price;
                    }, 0)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </TotalText>
              </TotalBox>
            </Wrapper>

            <CartButtonGroup>
              <CartLink to="/">쇼핑하기</CartLink>
              <CartLink to="/shipping">결제하기</CartLink>
            </CartButtonGroup>
          </>
        )}
      </Group>
    </Container>
  );
};

export default Carts;
