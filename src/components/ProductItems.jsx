import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux-toolkit/productSlice";
import StarRating from "./StarRating";
import { offSpinner, onSpinner } from "../redux-toolkit/spinnerSlice";
import Spinner from "../components/Spinner";
import { Mobile } from "../responsive";

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const CardLabel = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  background-color: #ffd43b;
  padding: 1.2rem 1.2rem 0.9rem 1.2rem;
  transform: rotate(0deg);
`;

export const ImgBox = styled.div`
  display: flex;
  width: 28rem;
  height: 35rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

  ${Mobile({
    width: "35rem",
  })}

  &:hover {
    opacity: 0.75;
    transform: translateY(-3px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 0;
`;

export const Title = styled.h1`
  color: darkblue;
  margin: 0;
  padding: 0.6rem 1.6rem;

  ${Mobile({
    fontSize: "3rem",
    lineHeight: "1.3",
    letterSpacing: "1.5px",
  })}
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 900;
  color: black;

  ${Mobile({
    fontSize: "2.2rem",
    lineHeight: "1.3",
    letterSpacing: "1px",
  })}
`;

export const OptionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  border: none;
  padding: 0.8rem 0rem;
  display: block;
  border-radius: 6px;
  letter-spacing: 0.5px;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  color: #e8590c;
  transition: all 0.3s ease;
  padding: 1rem;

  ${Mobile({
    fontSize: "1.6rem",
    lineHeight: "1.3",
    letterSpacing: "1px",
    marginTop: "1.4rem",
  })}

  &:hover {
    transform: scale(1.05);
    font-weight: 800;
  }

  & + button {
    color: #2f9e44;
  }

  & + button + button {
    color: #fcc419;
  }
`;

export const LinkBtn = styled(Link)`
  border: none;
  padding: 0.8rem 0rem;
  display: block;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: black;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const ProductItems = ({ _id, title, desc, price, img, inStock, rating }) => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const adminUser = useSelector((state) => state.user.user?.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/product/${id}`);
  };

  let prices = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Container>
      <Card>
        {isLoading && <Spinner></Spinner>}
        <ImgBox onClick={() => onClick(_id)}>
          <Image src={`http://localhost:5000/${img}`} alt={img} />
        </ImgBox>

        <InfoBox>
          <Title>{title}</Title>
          <Text>{prices}원</Text>
          <StarRating value={rating}></StarRating>

          <OptionBox>
            {adminUser && (
              <Button
                onClick={() => {
                  dispatch(deleteProduct({ id: _id }));
                  dispatch(onSpinner(true));

                  setTimeout(() => {
                    dispatch(offSpinner(false));
                  }, 1500);
                }}
              >
                삭제
              </Button>
            )}
            <Button onClick={() => onClick(_id)}>
              {adminUser ? "자세히" : "자세히 보기"}
            </Button>

            {adminUser && (
              <Button
                onClick={() =>
                  navigate("/productEdit", {
                    state: {
                      id: _id,
                      title,
                      desc,
                      price,
                      inStock,
                      img,
                    },
                  })
                }
              >
                수정
              </Button>
            )}
          </OptionBox>
        </InfoBox>
        {rating >= 4.5 ? <CardLabel>Best Product</CardLabel> : <></>}
      </Card>
    </Container>
  );
};

export default ProductItems;
