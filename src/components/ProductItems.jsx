import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux-toolkit/productSlice";
import StarRating from "./StarRating";

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
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  background-color: #ffd43b;
  padding: 0.8rem 1.2rem;
  transform: rotate(0deg);
`;

export const ImgBox = styled.div`
  display: flex;
  width: 30rem;
  height: 35rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

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
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 900;
  color: black;
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (id) => {
    navigate(`/product/${id}`);
  };

  let prices = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Container>
      <Card>
        <ImgBox onClick={() => onClick(_id)}>
          <Image src={`http://localhost:5000/${img}`} alt="img" />
        </ImgBox>

        <InfoBox>
          <Title>{title}</Title>
          <Text>{prices}원</Text>
          <StarRating value={rating}></StarRating>
          <OptionBox>
            <Button onClick={() => dispatch(deleteProduct({ id: _id }))}>
              삭제
            </Button>
            <Button onClick={() => onClick(_id)}>자세히</Button>
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
          </OptionBox>
        </InfoBox>
        {rating >= 4.5 ? <CardLabel>Best Product</CardLabel> : <></>}
      </Card>
    </Container>
  );
};

export default ProductItems;
