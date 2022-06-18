import React, { useEffect } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";
import {
  PriceBox,
  StockBox,
  Stock,
  Image,
  TitleBox,
  InfoBox,
  Price,
  Title,
} from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import {
  cartItemPrice,
  cartShippingPrice,
  cartTaxPrice,
  cartTotalPrice,
  deleteStorage,
} from "../redux-toolkit/cartSlice";
import { createOrder, createOrderReset } from "../redux-toolkit/orderSlice.js";
import { useNavigate } from "react-router-dom";
import { Laptops, Mobile, Tablets } from "../responsive";

export const Container = styled.div`
  width: 100%;
  padding: 4.8rem 4.8rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 11rem 0 0rem 0;

  ${Tablets({
    alignItems: "center",
  })}

  ${Mobile({
    alignItems: "center",
  })}
`;

export const OrderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e5fee9;
  padding: 3.2rem;
  border-radius: 1rem;
  width: 100%;
  align-items: center;

  ${Tablets({
    flexDirection: "column",
    width: "80%",
  })}

  ${Mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "1.6rem",
    justifyContent: "center",
    width: "80%",
    marginBottom: "3.6rem",
  })}
`;

export const OrderBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & svg {
    fill: #2b8a3e;
    width: 3rem;
    height: 3rem;
  }

  ${Mobile({
    margin: "0 auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const Circle = styled.div`
  background-color: #b2f2bb;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.6rem;
`;

export const SubTitle = styled.h1`
  margin: 0rem 0rem 1.4rem 0rem;
  letter-spacing: 1px;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-right: 0.4rem;
  letter-spacing: 0.5px;
`;

export const Span = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const Div = styled.div``;

export const Center = styled.div`
  display: flex;
  padding: 3rem;
  border-bottom: 1px solid black;
  width: 100%;

  ${Tablets({
    width: "100%",
    padding: "3rem",
    justifyContent: "center",
  })}

  ${Mobile({
    flexDirection: "column",
    marginBottom: "5.2rem",
    padding: "1rem",
  })}
`;

export const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 1rem;
`;

export const TotalGroup = styled.div`
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: auto;
  margin-top: 5rem;

  ${Tablets({
    margin: "5rem auto 3rem auto",
    width: "70%",
  })}

  ${Mobile({
    margin: "0 auto",
    width: "80%",
  })}
`;

export const TotalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
`;

export const ImgBox = styled.div`
  width: 16vw;
  height: 17vh;

  ${Laptops({
    width: "25%",
    height: "15vh",
  })}

  ${Tablets({
    width: "35%",
    height: "15vh",
  })}

   ${Mobile({
    width: "100%",
    height: "25rem",
    marginBottom: ".6rem",
  })};
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: #4ba87d;
  color: #f1f3f5;
  padding: 1.6rem 2rem;
  font-style: inherit;
  font-size: 2rem;
  border-radius: 5px;

  &:hover {
    background-color: #099268;
  }
`;

export const TotalLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const TotalSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const InfoListBox = styled(InfoBox)`
  ${Tablets({
    width: "85%",
    justifyContent: "space-between",
  })}
`;

export const TitleText = styled(Title)`
  ${Tablets({
    marginBottom: "3rem",
  })};
`;

export const CenterWrapper = styled.div`
  width: 100%;

  ${Tablets({
    display: "flex",
    justifyContent: "center",
  })}
`;

const PlaceOrder = () => {
  const user = useSelector((state) => state.user);
  const {
    user: { name, email },
  } = user;

  const cart = useSelector((state) => state.cart);
  const {
    cartItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = cart;

  const orderCreate = useSelector((state) => state.order);
  const { success, order } = orderCreate;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartItemPrice());
    dispatch(cartShippingPrice());
    dispatch(cartTaxPrice());
    dispatch(cartTotalPrice());

    if (success) {
      navigate(`/order/${order._id}`);

      dispatch(createOrderReset());
    }
  }, [navigate, success, dispatch, order]);

  const placeOrderHandler = (e) => {
    e.preventDefault();

    dispatch(deleteStorage());

    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        <OrderGroup>
          <OrderBox>
            <Circle>
              <FaUser></FaUser>
            </Circle>

            <Info>
              <SubTitle>Customer</SubTitle>
              <Div>
                <Label>
                  <strong>이름:</strong>
                </Label>
                <Span>{name}</Span>
              </Div>
              <Div>
                <Label>
                  <strong>이메일:</strong>
                </Label>
                <Span>{email}</Span>
              </Div>
            </Info>
          </OrderBox>

          <OrderBox>
            <Circle>
              <FaTruck></FaTruck>
            </Circle>

            <Info>
              <SubTitle>Order information</SubTitle>
              <Div>
                <Label>
                  <strong>지역:</strong>
                </Label>
                <Span>{shippingAddress.city}</Span>
              </Div>
              <Div>
                <Label>
                  <strong>결제: </strong>
                </Label>
                <Span>{paymentMethod}</Span>
              </Div>
            </Info>
          </OrderBox>

          <OrderBox>
            <Circle>
              <FaMapMarker></FaMapMarker>
            </Circle>

            <Info>
              <SubTitle>Deliver to</SubTitle>
              <div>
                <Label>
                  <strong>도로명번호:</strong>
                </Label>
                <Span>{shippingAddress.postalCode}</Span>
              </div>
              <div>
                <Label>
                  <strong>상세주소:</strong>
                </Label>
                <Span>계양구 리덕스 아파트</Span>
              </div>
            </Info>
          </OrderBox>
        </OrderGroup>

        <ProductGroup>
          {cartItems.map((item) => (
            <CenterWrapper key={item.product}>
              <Center>
                <ImgBox>
                  <Image src={`http://localhost:5000/${item.img}`} alt="make" />
                </ImgBox>

                <InfoListBox>
                  <TitleBox>
                    <TitleText>product</TitleText>
                    <Title>{item.title}</Title>
                  </TitleBox>
                  <StockBox>
                    <TitleText>Quantity</TitleText>
                    <Stock>{item.quantity}</Stock>
                  </StockBox>
                  <PriceBox>
                    <TitleText>Price</TitleText>
                    <Price>
                      {item.price
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </Price>
                  </PriceBox>
                </InfoListBox>
              </Center>
            </CenterWrapper>
          ))}
        </ProductGroup>
      </Wrapper>
      <TotalGroup>
        <div>
          <TotalBox>
            <TotalLabel>Products</TotalLabel>
            <TotalSpan>
              +{" "}
              {itemsPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </TotalSpan>
          </TotalBox>

          <TotalBox>
            <TotalLabel>Shipping</TotalLabel>
            <TotalSpan>
              +{" "}
              {shippingPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </TotalSpan>
          </TotalBox>

          <TotalBox>
            <TotalLabel>Discount</TotalLabel>
            <TotalSpan>
              -{" "}
              {taxPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </TotalSpan>
          </TotalBox>

          <TotalBox>
            <TotalLabel>Total</TotalLabel>
            <TotalSpan>
              {totalPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </TotalSpan>
          </TotalBox>
        </div>

        <Button onClick={placeOrderHandler}>주문하기</Button>
      </TotalGroup>
    </Container>
  );
};

export default PlaceOrder;
