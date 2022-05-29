import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProduct } from "../../redux-toolkit/productSlice";
import Spinner from "../../components/Spinner";
import { offSpinner, onSpinner } from "../../redux-toolkit/spinnerSlice";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1530487834809-19eca6fc2de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3.2rem;
  row-gap: 4.8rem;
  width: 60rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  color: #4ba87d;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;
`;

const Button = styled.button`
  display: block;
  grid-column: 1 / 2;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #fa5252;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  border-radius: 9px;

  & + button {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    background-color: #4ba87d;
  }
`;

const ProductEdit = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);

  const { state } = useLocation();

  const [userData, setUserData] = useState(state);

  const { id, title, desc, price, categories, inStock, img } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("img", img);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("price", price);
    formData.append("categories", categories);
    formData.append("inStock", inStock);

    dispatch(updateProduct({ id, formData }));

    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
    }, 1500);

    setUserData({
      title: "",
      desc: "",
      price: "",
      categories: "",
      inStock: "",
    });
  };

  const handleImage = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      img: e.target.files[0],
    }));
  };

  return (
    <Container>
      <Wrapper>
        {isLoading && <Spinner></Spinner>}
        <Form onSubmit={onSubmit} encType="multipart/form-data">
          <Box>
            <Label>이미지</Label>
            <Input
              type="file"
              name="img"
              accept=".png, .jpg, .jpeg"
              onChange={handleImage}
            />
          </Box>
          <Box>
            <Label>상품명</Label>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Add title"
            />
          </Box>
          <Box>
            <Label>설명</Label>
            <Input
              type="text"
              name="desc"
              value={desc}
              onChange={onChange}
              placeholder="Add desc"
            />
          </Box>
          <Box>
            <Label>가격</Label>
            <Input
              type="number"
              name="price"
              value={price}
              onChange={onChange}
              placeholder="Add price"
            />
          </Box>
          {/* <Box>
            <Label>분류</Label>
            <Input
              type="text"
              name="categories"
              value={categories}
              onChange={onChange}
              placeholder="Add categories"
            />
          </Box> */}
          <Box>
            <Label>재고</Label>
            <Input
              type="number"
              name="inStock"
              value={inStock}
              onChange={onChange}
              placeholder="Add inStock"
            />
          </Box>

          <Button type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
          <Button type="submit">업데이트</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProductEdit;
