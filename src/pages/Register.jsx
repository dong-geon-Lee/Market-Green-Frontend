import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux-toolkit/userSlice";

export const Container = styled.div``;

const Register = () => {
  // const user = useSelector((state) => state.user);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, []);

  // console.log(user);

  return <Container>g</Container>;
};

export default Register;
