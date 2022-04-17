import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, registerUser } from "../redux-toolkit/userSlice";

export const Container = styled.div``;

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
      <form onSubmit={onSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter name..."
          />
        </div>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter email..."
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Enter password..."
          />
        </div>
        <div>
          <label>password Confirm</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="password confirm..."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
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
