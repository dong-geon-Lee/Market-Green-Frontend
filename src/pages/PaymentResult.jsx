import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../redux-toolkit/orderSlice";
import { Mobile } from "../responsive";
import moment from "moment";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 2px;
    margin: 3rem 0;
    color: blue;
  }

  & #customers {
    width: 100%;
    border-collapse: collapse;

    ${Mobile({
      width: "48vw",
    })}

    & td,
    & th {
      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 1.5;
      color: #000;
      border: 1px solid black;
      padding: 1.2rem 1.6rem;
      text-align: center;

      ${Mobile({
        padding: "1.2rem",
      })}
    }

    & td:nth-child(even) {
      background-color: #f2f2f2;
    }

    & td:nth-child(odd) {
      background-color: #fff;
    }

    & td:last-child {
      color: red;
    }

    & thead {
      background-color: #04aa6d;

      & td:hover {
        background-color: #ddd;
      }
    }
  }
`;

export const table = styled.table``;

const PaymentResult = () => {
  const order = useSelector((state) => state.order.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [order._id, dispatch]);

  return (
    <Container>
      <Wrapper>
        <h1>{order && order[0]?.user.name}님의 결제내역</h1>

        <table id="customers">
          <thead>
            <tr>
              <th>orderID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>

            {order.map((data) => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.orderItems[0].title}</td>
                <td>{data.user.name}</td>
                <td>
                  {data.paidAt
                    ? data.paidAt?.split("T")[0]
                    : moment().format()?.split("T")[0]}
                </td>
                <td>
                  {data.totalPrice
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </td>
                <td>
                  {data.paymentResult?.status ? (
                    "결제완료"
                  ) : (
                    <strong style={{ color: "blue" }}>결제 대기 중</strong>
                  )}
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </Wrapper>
    </Container>
  );
};

export default PaymentResult;
