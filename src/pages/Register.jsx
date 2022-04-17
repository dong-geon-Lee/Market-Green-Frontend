import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux-toolkit/userSlice";

export const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  min-width: 60rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: #4ba87d;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: 1px solid #9f9f9f;
`;

const Button = styled.button`
  display: block;
  grid-column: 1 / -1;
  padding: 1.6rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
  margin: 1.2rem 0;
  color: #fff;
  background-color: #4ba87d;
  text-transform: uppercase;
`;

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={onSubmit}>
          <Box>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter name..."
            />
          </Box>
          <Box>
            <Label>E-mail</Label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter email..."
            />
          </Box>
          <Box>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter password..."
            />
          </Box>
          <Box>
            <Label>Password Confirm</Label>
            <Input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="password confirm..."
            />
          </Box>

          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

// const user = useSelector((state) => state.user);

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(getUsers());
// }, []);

// console.log(user);
