import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "./ProductItems";
import { getProducts } from "../redux-toolkit/productSlice";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

export const Container = styled.div`
  max-width: 140rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4.8rem;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;
`;

export const Arrow = styled.svg`
  font-size: 5rem;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
`;

export const ArrowLeft = styled(Arrow)`
  left: 0%;
  z-index: 10;
`;

export const ArrowRight = styled(Arrow)`
  right: -18%;
  z-index: 10;
`;

const Products = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      dispatch(getProducts());
    }
  }, [dispatch]);

  return (
    <Container>
      <ArrowLeft>
        <BsArrowLeftShort></BsArrowLeftShort>
      </ArrowLeft>
      <ArrowRight>
        <BsArrowRightShort></BsArrowRightShort>
      </ArrowRight>

      <Title>Product</Title>

      <Wrapper>
        {products &&
          products?.map((data) => (
            <ProductItems key={data._id} {...data}></ProductItems>
          ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
