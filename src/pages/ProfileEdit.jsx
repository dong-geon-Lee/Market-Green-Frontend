import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { reset, tryAuth, updateUser } from "../redux-toolkit/userSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { offSpinner, onSpinner } from "../redux-toolkit/spinnerSlice";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url("https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80");
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
  grid-template-columns: repeat(1, 1fr);
  column-gap: 3.2rem;
  row-gap: 3.8rem;
  width: 40rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

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
  padding: 1.4rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
  border-radius: 9px;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Button = styled.button`
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
  background-color: #fa5252;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  width: 100%;
  border-radius: 9px;

  & + button {
    background-color: #4ba87d;

    &:hover,
    &:active {
      border-color: #37b24d;
      background-color: #2f9e44;
    }
  }

  &:hover,
  &:active {
    border-color: #f03e3e;
    background-color: #e03131;
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
  margin-top: 1rem;
`;

export const MessageResult = styled(Message)`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  /* margin-top: 2rem; */
`;

const ProfileEdit = () => {
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const { user, error, isSuccess } = useSelector((state) => state.user);
  const { _id } = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
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

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(tryAuth());
      }, 5000);
    }

    if (user && isSuccess) {
      navigate("/profile");
    }
  }, [dispatch, navigate, user, error, isSuccess]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: _id,
      name,
      email,
      password,
    };

    dispatch(updateUser(newUser));

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
            {nameInputIsInvalid && <Message>이름을 입력하세요</Message>}
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
              <Message>이메일을 입력하세요</Message>
            ) : (
              email &&
              !emailIsValid && (
                <Message>
                  이메일에 <strong style={{ fontSize: "1.6rem" }}>'@'</strong>을
                  입력하세요
                </Message>
              )
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
              <Message>비밀번호를 입력하세요</Message>
            ) : (
              password &&
              !passwordIsValid && (
                <Message>비밀번호는 4자 이상 입력하세요</Message>
              )
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
              <Message>비밀번호를 입력하세요</Message>
            ) : (
              passwordIsValid &&
              !password2IsValid && (
                <Message>비밀번호가 일치하지 않습니다</Message>
              )
            )}
          </Box>

          {error && <MessageResult>{error}</MessageResult>}
          <BtnBox>
            <Button type="button" onClick={() => navigate(-1)}>
              뒤로가기
            </Button>
            <Button type="submit" disabled={!formIsValid}>
              변경하기
            </Button>
          </BtnBox>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ProfileEdit;
