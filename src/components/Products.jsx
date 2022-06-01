import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import ProductItems from "./ProductItems";
import { getProducts } from "../redux-toolkit/productSlice";
import Carousel from "react-elastic-carousel";

export const Container = styled.div`
  max-width: 140rem;
  padding: 9.6rem 3.2rem;
  margin: 0 auto;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 4.8rem;
  text-align: center;
  letter-spacing: 1px;
  color: #7ed56f;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.2rem;

  & .rec {
    column-gap: 0.8rem;

    & .rec-arrow {
      opacity: 0.3;
      margin-bottom: 13rem;
    }

    
  }

  & .rec.rec-arrow-left:hover:enabled,
  .rec.rec-arrow-right:hover:enabled {
    opacity: 0.6;
    background-color: #7ed56f;
    box-shadow: 0 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

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
      <Title>Product</Title>

      <Wrapper>
        <Carousel breakPoints={breakPoints}>
          {products &&
            products?.map((data) => (
              <ProductItems key={data._id} {...data}></ProductItems>
            ))}
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Products;
