import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Carts = () => {
  const { products, total } = useSelector((state) => state.cart);

  console.log(products, "?");
  console.log(products.price);
  console.log(products.quantity);

  return (
    <>
      {products.map((cart, index) => (
        <CartItems key={index} {...cart} qty={cart.quantity}></CartItems>
      ))}

      <h1>{total}</h1>
    </>
  );
};

export default Carts;
