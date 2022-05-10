import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../redux-toolkit/cartSlice";
import CartItems from "./CartItems";

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
    <>
      {cartItems?.map((cart, index) => (
        <CartItems key={index} {...cart} qty={cart.quantity}></CartItems>
      ))}
      <h1>what render list</h1>
    </>
  );
};

export default Carts;
