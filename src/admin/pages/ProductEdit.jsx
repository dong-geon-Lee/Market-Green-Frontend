import React, { useState } from "react";
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
  gap: 0.6rem;

  & .imgInput {
    border: ${(props) =>
      props.inValidImg ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidImg ? "#fddddd" : "#fff")};
  }

  & .imgInput:focus {
    background-color: ${(props) => (props.inValidImg ? "#fbe8d2" : "#e5dbff")};
    border-color: ${(props) => (props.inValidImg ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .titleInput {
    border: ${(props) =>
      props.inValidTitle ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidTitle ? "#fddddd" : "#fff")};
  }

  & .titleInput:focus {
    background-color: ${(props) =>
      props.inValidTitle ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidTitle ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .descInput {
    border: ${(props) =>
      props.inValidDesc ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidDesc ? "#fddddd" : "#fff")};
  }

  & .descInput:focus {
    background-color: ${(props) => (props.inValidDesc ? "#fbe8d2" : "#e5dbff")};
    border-color: ${(props) => (props.inValidDesc ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .priceInput {
    border: ${(props) =>
      props.inValidPrice ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidPrice ? "#fddddd" : "#fff")};
  }

  & .priceInput:focus {
    background-color: ${(props) =>
      props.inValidPrice ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidPrice ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .inStockInput {
    border: ${(props) =>
      props.inValidInStock ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidInStock ? "#fddddd" : "#fff")};
  }

  & .inStockInput:focus {
    background-color: ${(props) =>
      props.inValidInStock ? "#fbe8d2" : "#e5dbff"};
    border-color: ${(props) => (props.inValidInStock ? "#ff8800" : "#240370")};
    outline: none;
  }
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

    &:hover,
    &:active {
      border-color: #2b8a3e;
      background-color: #2b8a3e;
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      cursor: not-allowed;
      background-color: #ccc;
      border-color: #ccc;
      color: #292929;
    }
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #f03e3e;
`;

const ProductEdit = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);

  const { state } = useLocation();

  const [userData, setUserData] = useState(state);

  const { id, title, desc, price, categories, inStock, img } = userData;

  const [imgTouched, setImgTouched] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [inStockTouched, setInStockTouched] = useState(false);

  const imgIsValid = img !== "";
  const titleIsValid = title.trim() !== "";
  const descIsValid = desc.trim() !== "";
  const priceIsValid = price !== "";
  const inStockIsValid = inStock !== "" && inStock > 1;

  const imgInputIsInvalid = !img && imgTouched;
  const titleInputIsInvalid = !title && titleTouched;
  const descInputIsInvalid = !desc && descTouched;
  const priceInputIsInvalid = !price && priceTouched;
  const inStockInputIsInvalid = !inStock && inStockTouched;

  let formIsValid = false;

  if (
    imgTouched &&
    imgIsValid &&
    titleIsValid &&
    descIsValid &&
    priceIsValid &&
    inStockIsValid
  ) {
    formIsValid = true;
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const imgInputBlurHandler = () => {
    setImgTouched(true);
  };

  const titleInputBlurHandler = () => {
    setTitleTouched(true);
  };

  const descInputBlurHandler = () => {
    setDescTouched(true);
  };

  const priceInputBlurHandler = () => {
    setPriceTouched(true);
  };

  const inStockInputBlurHandler = () => {
    setInStockTouched(true);
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
    formData.append("inStock", inStock);
    // formData.append("categories", categories);

    dispatch(updateProduct({ id, formData }));

    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
      navigate(-1);
    }, 1500);
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
          <Box inValidImg={imgInputIsInvalid}>
            <Label>이미지</Label>
            <Input
              type="file"
              name="img"
              accept=".png, .jpg, .jpeg"
              onChange={handleImage}
              onBlur={imgInputBlurHandler}
              className="imgInput"
            />
            {imgInputIsInvalid && <Message>Name must not be empty </Message>}
          </Box>

          <Box inValidTitle={titleInputIsInvalid}>
            <Label>상품명</Label>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={onChange}
              onBlur={titleInputBlurHandler}
              placeholder="Add title"
              className="titleInput"
            />
            {titleInputIsInvalid && <Message>Title must not be empty</Message>}
          </Box>

          <Box inValidDesc={descInputIsInvalid}>
            <Label>설명</Label>
            <Input
              type="text"
              name="desc"
              value={desc}
              onChange={onChange}
              onBlur={descInputBlurHandler}
              placeholder="Add desc"
              className="descInput"
            />
            {descInputIsInvalid && <Message>Desc must not be empty</Message>}
          </Box>

          <Box inValidPrice={priceInputIsInvalid}>
            <Label>가격</Label>
            <Input
              type="number"
              name="price"
              value={price}
              onChange={onChange}
              onBlur={priceInputBlurHandler}
              placeholder="Add price"
              className="priceInput"
            />
            {priceInputIsInvalid && <Message>Price must not be empty</Message>}
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
          <Box inValidInStock={inStockInputIsInvalid}>
            <Label>재고</Label>
            <Input
              type="number"
              name="inStock"
              value={inStock}
              onChange={onChange}
              onBlur={inStockInputBlurHandler}
              placeholder="Add inStock"
              className="inStockInput"
              min={0}
              max={5}
            />
            {inStockInputIsInvalid ? (
              <Message>Instock must not be empty</Message>
            ) : (
              inStock && !inStockIsValid && <Message>inStock 0 more</Message>
            )}
          </Box>

          <Button type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
          <Button type="submit" disabled={!formIsValid}>
            업데이트
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProductEdit;
