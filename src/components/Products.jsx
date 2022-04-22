import React from "react";
import styled from "styled-components";
import ProductItems from "./ProductItems";
import { productDummy } from "../data/productDummy";

export const Container = styled.div`
  max-width: 130rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2.4rem;
`;

const Products = () => {
  return (
    <Container>
      <Wrapper>
        {productDummy.map((data) => (
          <ProductItems key={data.id} {...data}></ProductItems>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
