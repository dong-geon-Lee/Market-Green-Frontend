import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { savePaymentMethod } from "../redux-toolkit/cartSlice";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12.8rem 0;
  height: 100%;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  height: 25rem;
  border: 1px solid #e9ecef;
  padding: 2rem 4rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);
`;

const PaymentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Title = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: #4ba87d;
  color: #f1f3f5;
  padding: 1.6rem 2rem;
  font-style: inherit;
  font-size: 2rem;
  border-radius: 5px;
`;

const Input = styled.input``;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`;

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(paymentMethod));

    navigate("/placeorder");
  };

  return (
    <Container>
      <Wrapper onSubmit={submitHandler}>
        <Title>결제방법</Title>
        <PaymentBox>
          <Input
            type="radio"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            checked
          />
          <Label>PaPal Checkout</Label>
        </PaymentBox>

        <Button type="submit">Continue</Button>
      </Wrapper>
    </Container>
  );
};

export default Payment;
