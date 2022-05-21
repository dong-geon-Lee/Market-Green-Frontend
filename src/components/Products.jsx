import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "./ProductItems";
import { getProducts } from "../redux-toolkit/productSlice";

export const Container = styled.div`
  max-width: 130rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
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
      <Wrapper>
        {products?.map((data) => (
          <ProductItems key={data._id} {...data}></ProductItems>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
