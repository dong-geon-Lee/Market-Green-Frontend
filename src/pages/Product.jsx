import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  deleteReview,
  getProduct,
  reviewReset,
} from "../redux-toolkit/productSlice";
import StarRating from "../components/StarRating";
import moment from "moment";
import SubStarRating from "../components/SubStarRating";
import { offSpinner, onSpinner } from "../redux-toolkit/spinnerSlice";
import Spinner from "../components/Spinner";

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

export const ReviewUser = styled.p`
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

export const CommentBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: center;
`;

export const SelectInfo = styled.div`
  margin-bottom: 3.6rem;
`;

export const CommentTitle = styled(ReviewText)`
  margin-bottom: 2rem;
`;

export const CommentRating = styled(ReviewTest)`
  margin-bottom: 1rem;
`;

export const CommentSelect = styled.select`
  width: 80%;
  background-color: #eee;
  outline: none;
  padding: 1.2rem;
  border: none;
  cursor: pointer;
`;

export const CommentText = styled(ReviewTest)`
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  width: 80%;
  background-color: #eee;
  border: none;
  outline: none;
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const CommentInfo = styled.div``;

export const SubmitButton = styled(OrderBtn)`
  width: 80%;
`;

export const Button = styled(OrderBtn)`
  width: 4%;
  padding: 0.3rem;
  cursor: pointer;
  margin-left: 85%;
`;

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const userData = useSelector((state) => state.product);
  const { loading, error, product } = userData;

  const isLoading = useSelector((state) => state.spinner.isLoading);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`);
  };

  useEffect(() => {
    if (id || product._id) {
      dispatch(getProduct(id));
    }
  }, [dispatch, id, product._id, product?.img]);

  const isStockNum = [...Array(product?.inStock).keys()];

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(reviewReset());

    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
    }, 1500);

    dispatch(addReview({ id, rating, comment }));
    setRating("");
    setComment("");
  };

  const totalRating =
    product?.reviews?.reduce((acc, item) => item?.rating + acc, 0) /
      product?.reviews?.length || 0.0;

  return (
    <Container>
      <Wrapper>
        {isLoading && <Spinner></Spinner>}
        <Left>
          <ImgBox>
            <Image
              src={`http://localhost:5000/${product?.img}`}
              alt="take your image"
            />
          </ImgBox>

          <ReviewGroup>
            <ReviewText>Reviews</ReviewText>
            {product?.reviews?.map((review) => (
              <Review key={review._id}>
                <ReviewBox>
                  <ReviewUser>
                    {review.name}
                    <Button
                      onClick={() =>
                        dispatch(
                          deleteReview({
                            id: review._id,
                            numReviews: product.numReviews,
                            rating: product.rating,
                          })
                        )
                      }
                    >
                      x
                    </Button>
                  </ReviewUser>

                  <StarRating
                    value={review.rating}
                    totalRating={totalRating}
                  ></StarRating>
                  <ReviewDate>{moment(review.createdAt).calendar()}</ReviewDate>

                  <ReviewTextZone>
                    <ReviewTest>{review.comment}</ReviewTest>
                  </ReviewTextZone>
                </ReviewBox>
              </Review>
            ))}
          </ReviewGroup>
        </Left>
        <ProductGroup>
          <InfoBox>
            <Title>{product?.title}</Title>
            <Desc>
              {product?.desc} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Molestiae dolores quam fuga excepturi, cupiditate blanditiis
              culpa architecto qui error provident omnis deleniti facilis quas
              et placeat rem nemo distinctio labore.
            </Desc>
          </InfoBox>

          <TableBox>
            <PriceBox>
              <Price>가격</Price>
              <Price>{product?.price}원</Price>
            </PriceBox>
            {product?.inStock > 0 ? (
              <StockBox>
                <Stock>재고</Stock>
                <Stock>In Stock</Stock>
              </StockBox>
            ) : (
              <StockBox>
                <Stock>unavailable</Stock>
              </StockBox>
            )}

            <RatingBox>
              <Rating>평점</Rating>

              <SubStarRating
                value={product?.rating?.toFixed(1)}
                totalRating={totalRating}
              ></SubStarRating>
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

          <CommentBox onSubmit={submitHandler}>
            <CommentTitle>Write a customer review</CommentTitle>
            <SelectInfo>
              <CommentRating>Rating</CommentRating>
              <CommentSelect
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="1">1-Poor</option>
                <option value="2">2-Fair</option>
                <option value="3">3-good</option>
                <option value="4">4-Very good</option>
                <option value="5">5-Excellent</option>
              </CommentSelect>
            </SelectInfo>

            <CommentInfo>
              <CommentText>Comment</CommentText>
              <TextArea
                rows="10"
                cols="10"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              >
                {comment}
              </TextArea>
            </CommentInfo>

            <SubmitButton type="submit">제출하기</SubmitButton>
          </CommentBox>
        </ProductGroup>
      </Wrapper>
    </Container>
  );
};

export default Product;

// Good
// "/users/:id" => <Users /> // useParams().id

// Good
// "/search?keyword=something" : <Search /> // useLocation().search
