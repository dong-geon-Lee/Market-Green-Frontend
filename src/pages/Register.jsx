import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import { offSpinner, onSpinner } from "../redux-toolkit/spinnerSlice";
import Spinner from "../components/Spinner";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=713&q=80");
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

  & .nameInput {
    border: ${(props) =>
      props.inValidName ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidName ? "#fddddd" : "#fff")};
  }

  & .nameInput:focus {
    background-color: ${(props) => (props.inValidName ? "#fbe8d2" : "#f4fce3")};
    border-color: ${(props) => (props.inValidName ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .emailInput {
    border: ${(props) =>
      props.inValidEmail ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) => (props.inValidEmail ? "#fddddd" : "#fff")};
  }

  & .emailInput:focus {
    background-color: ${(props) =>
      props.inValidEmail ? "#fbe8d2" : "#f4fce3"};
    border-color: ${(props) => (props.inValidEmail ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .passwordInput {
    border: ${(props) =>
      props.inValidPassword ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) =>
      props.inValidPassword ? "#fddddd" : "#fff"};
  }

  & .passwordInput:focus {
    background-color: ${(props) =>
      props.inValidPassword ? "#fbe8d2" : "#f4fce3"};
    border-color: ${(props) => (props.inValidPassword ? "#ff8800" : "#240370")};
    outline: none;
  }

  & .password2Input {
    border: ${(props) =>
      props.inValidPassword2 ? "1px solid #b40e0e" : "1px solid #9f9f9f"};
    background-color: ${(props) =>
      props.inValidPassword2 ? "#fddddd" : "#fff"};
  }

  & .password2Input:focus {
    background-color: ${(props) =>
      props.inValidPassword2 ? "#fbe8d2" : "#f4fce3"};
    border-color: ${(props) =>
      props.inValidPassword2 ? "#ff8800" : "#240370"};
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
  grid-column: 1 / -1;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #4ba87d;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  border-radius: 9px;

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
`;

export const Message = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #f03e3e;
`;

const Register = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userData;

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [password2Touched, setPassword2Touched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const emailIsValid = email.includes("@");
  const passwordIsValid = password.trim() !== "" && password.length > 3;
  const password2IsValid =
    password2.trim() !== "" && password2.length > 3 && password === password2;

  const nameInputIsInvalid = !name && nameTouched;
  const emailInputIsInvalid = !email && emailTouched;
  const passwordInputIsInvalid = !password && passwordTouched;
  const password2InputIsInvalid = !password2 && password2Touched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid && passwordIsValid && password2IsValid) {
    formIsValid = true;
  }

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const nameInputBlurHandler = () => {
    setNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEmailTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setPasswordTouched(true);
  };

  const password2InputBlurHandler = () => {
    setPassword2Touched(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      alert("Form Invalid!");
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    dispatch(registerUser(newUser));

    setUserData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    setNameTouched(false);
    setEmailTouched(false);
    setPasswordTouched(false);
    setPassword2Touched(false);

    dispatch(onSpinner(true));

    setTimeout(() => {
      dispatch(offSpinner(false));
      navigate("/login");
    }, 1500);
  };

  return (
    <Container>
      <Wrapper>
        {isLoading && <Spinner></Spinner>}
        <Form onSubmit={onSubmit}>
          <Box inValidName={nameInputIsInvalid}>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              onBlur={nameInputBlurHandler}
              placeholder="Enter name..."
              className="nameInput"
            />
            {nameInputIsInvalid && <Message>Name must not be empty</Message>}
          </Box>
          <Box inValidEmail={emailInputIsInvalid}>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              onBlur={emailInputBlurHandler}
              placeholder="Enter email..."
              className="emailInput"
            />
            {emailInputIsInvalid ? (
              <Message>email empty</Message>
            ) : (
              email && !emailIsValid && <Message>'@' not includes</Message>
            )}
          </Box>
          <Box inValidPassword={passwordInputIsInvalid}>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              onBlur={passwordInputBlurHandler}
              placeholder="Enter password..."
              className="passwordInput"
            />
            {passwordInputIsInvalid ? (
              <Message>password must not be empty.</Message>
            ) : (
              password &&
              !passwordIsValid && <Message>password length 3 more </Message>
            )}
          </Box>
          <Box inValidPassword2={password2InputIsInvalid}>
            <Label>Password Confirm</Label>
            <Input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              onBlur={password2InputBlurHandler}
              placeholder="Password Confirm..."
              className="password2Input"
            />
            {password2InputIsInvalid ? (
              <Message>password2 must not be empty.</Message>
            ) : (
              passwordIsValid &&
              !password2IsValid && <Message>password not correct</Message>
            )}
          </Box>

          <Button type="submit" disabled={!formIsValid}>
            회원가입
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
