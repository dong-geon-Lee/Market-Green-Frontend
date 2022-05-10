import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux-toolkit/productSlice";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 130rem;
  margin: 0 auto;
  gap: 4.8rem;
  padding: 0 2.4rem;
`;

export const Left = styled.div`
  flex: 1;
  margin-top: 4.8rem;
`;

export const ImgBox = styled.div`
  height: 70rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductGroup = styled.div`
  flex: 1;
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
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
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const TableBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: none;
  margin-top: 3.6rem;
  margin-bottom: auto;
  width: 60%;
`;

export const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #343a40;
  padding: 1.2rem 1.6rem;
`;

export const Stock = styled.p`
  font-size: 2rem;
  padding: 1.2rem 1.6rem;
  font-weight: 700;
  color: #343a40;
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

export const QuantityBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
`;

export const CartText = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
`;

export const OrderBtnBox = styled.div`
  display: flex;
`;

export const OrderBtn = styled.button`
  display: inline-block;
  width: 100%;
  border: none;
  background-color: #c3fae8;
  padding: 2rem 1.4rem;
  letter-spacing: 1px;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  color: #1971c2;
  cursor: pointer;
  text-align: center;

  & + button {
    background-color: #8ce99a;
    color: #343a40;
  }
`;

export const Select = styled.select`
  font-family: inherit;
  border: none;
  outline: none;
  font-size: inherit;
  padding: 0.4rem 3rem 0.4rem 1rem;
  background-color: #eee;
`;

export const StockBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Rating = styled.div`
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 1.6rem;

  & svg {
    fill: #ebb450;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  max-width: 130rem;
  margin: 0 auto;
  gap: 4.8rem;
  padding: 0 2.4rem;
`;

export const ReviewGroup = styled.div`
  margin: 12.8rem 0;
`;

export const Review = styled.div`
  margin-bottom: 3.2rem;
`;

export const ReviewText = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
  letter-spacing: 1px;
`;

export const ReviewDate = styled.p`
  margin-bottom: 1.2rem;
`;

export const ReviewtUser = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const ReviewBox = styled.div`
  background-color: #eee;
  padding: 1.6rem 1.6rem;
`;

export const ReviewTest = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const ReviewTextZone = styled.div`
  background-color: #cff4fc;
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: center;
`;

export const Star = styled(Rating)`
  font-size: 1.2rem;
  padding: 0.8rem 0rem;
  font-size: 1.2rem;
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

  // Good
  // "/users/:id" => <Users /> // useParams().id

  // Good
  // "/search?keyword=something" : <Search /> // useLocation().search

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
        <Left>
          <ImgBox>
            <Image src={`${product.img}`} alt={product.id} />
          </ImgBox>

          <ReviewGroup>
            <ReviewText>Reviews</ReviewText>
            <Review>
              <ReviewBox>
                <ReviewtUser>Admin</ReviewtUser>

                <Star>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </Star>

                <ReviewDate>
                  Today at <strong>9 : 48 PM</strong>
                </ReviewDate>

                <ReviewTextZone>
                  <ReviewTest>이 제품 정말 예뻐요!</ReviewTest>
                </ReviewTextZone>
              </ReviewBox>
            </Review>
            <Review>
              <ReviewBox>
                <ReviewtUser>Admin</ReviewtUser>

                <Star>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </Star>

                <ReviewDate>
                  Today at <strong>9 : 48 PM</strong>
                </ReviewDate>

                <ReviewTextZone>
                  <ReviewTest>이 제품 정말 예뻐요!</ReviewTest>
                </ReviewTextZone>
              </ReviewBox>
            </Review>
            <Review>
              <ReviewBox>
                <ReviewtUser>Admin</ReviewtUser>

                <Star>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </Star>

                <ReviewDate>
                  Today at <strong>9 : 48 PM</strong>
                </ReviewDate>

                <ReviewTextZone>
                  <ReviewTest>이 제품 정말 예뻐요!</ReviewTest>
                </ReviewTextZone>
              </ReviewBox>
            </Review>
          </ReviewGroup>
        </Left>
        <ProductGroup>
          <InfoBox>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
          </InfoBox>

          <TableBox>
            <PriceBox>
              <Price>가격</Price>
              <Price>{product.price}원</Price>
            </PriceBox>
            {product.inStock > 0 ? (
              <StockBox>
                <Stock>재고</Stock>
                <Stock>In Stock</Stock>
              </StockBox>
            ) : (
              <Stock>unavailable</Stock>
            )}

            <RatingBox>
              <Rating>평점</Rating>
              <Rating>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </Rating>
            </RatingBox>
            <QuantityBox>
              <CartText>수량</CartText>
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
            </QuantityBox>
            <OrderBtn onClick={AddCartHandler}>장바구니에 담기</OrderBtn>
          </TableBox>
        </ProductGroup>
      </Wrapper>
    </Container>
  );
};

export default Product;
