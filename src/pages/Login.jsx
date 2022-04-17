import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux-toolkit/userSlice";

const Container = styled.div``;

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = userData;

  const onChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("not corrent password!");
    }

    const newUser = {
      email,
      password,
    };

    dispatch(loginUser(newUser));

    setUserData({
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
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

export default Login;
