import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Carts = () => {
  const { products, total } = useSelector((state) => state.cart);

  // const item = JSON.parse(localStorage.getItem("item"));

  // console.log(item);

  console.log(JSON.parse(localStorage.getItem("item")));
  return (
    <>
      {products?.map((cart, index) => (
        <CartItems key={index} {...cart} qty={cart.quantity}></CartItems>
      ))}

      <h1>{total}</h1>
    </>
  );
};

export default Carts;
