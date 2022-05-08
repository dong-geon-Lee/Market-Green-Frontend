import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux-toolkit/productSlice";

export const Container = styled.div`
  display: flex;
  background-color: beige;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImgBox = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductGroup = styled.div`
  padding: 2rem;
`;

export const InfoBox = styled.div`
  line-height: 1.6;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: red;
  margin-bottom: 1rem;
`;

export const Stock = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: blue;
  margin-bottom: 1rem;
`;

export const CartBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

export const CartBtn = styled.button`
  border: 1px solid grey;
  padding: 0.8rem 1rem;
  background-color: transparent;
  cursor: pointer;
  color: #4ba87d;
  font-size: 2rem;
  border-radius: 4px;
`;

export const CartText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  padding: 0 0.6rem;
`;

export const OrderBtnBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const OrderBtn = styled.button`
  border: none;
  background-color: #c3fae8;
  padding: 1.2rem 1.4rem;
  border-radius: 9px;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1971c2;
  cursor: pointer;
  margin-top: 1.4rem;

  & + button {
    background-color: #8ce99a;
    color: #343a40;
  }
`;

export const Select = styled.select`
  padding: 1rem 1.2rem;
  font-family: inherit;
  border: none;
  outline: none;
`;

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const userData = useSelector((state) => state.product);
  const { loading, error, product } = userData;

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("why?", product);

  const AddCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`);
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const isStockNum = [...Array(product?.inStock).keys()];

  return (
    <Container>
      <Wrapper>
        <ImgBox>
          <Image src={`/${product.img}`} alt={product.id} />
        </ImgBox>
        <ProductGroup>
          <InfoBox>
            <Title>제목: {product.title}</Title>
            <Desc>설명: {product.desc}</Desc>
            <Price>가격: {product.price}</Price>
            {product.inStock > 0 ? (
              <Stock>In Stock</Stock>
            ) : (
              <Stock>unavailable</Stock>
            )}
          </InfoBox>

          {product.inStock > 0 ? (
            <>
              <CartText>Quantity</CartText>
              <Select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {isStockNum.map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </Select>

              <OrderBtnBox>
                <OrderBtn onClick={AddCartHandler}>장바구니에 담기</OrderBtn>
              </OrderBtnBox>
            </>
          ) : null}
        </ProductGroup>
      </Wrapper>
    </Container>
  );
};

export default Product;
