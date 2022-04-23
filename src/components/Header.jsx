import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import { reset } from "../redux-toolkit/userSlice";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 9.6rem;
  padding: 0 3.2rem;
  position: relative;

  & a {
    text-decoration: none;
    color: #212529;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;

export const LogoTitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;

export const Items = styled.li`
  display: flex;
  align-items: center;
`;

export const ItemLink = styled.a`
  color: #333;
  font-size: 1.8rem;
  font-weight: 500;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #4ba87d;
  color: #fff;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.2rem;
  border: none;
  border-radius: 9px;
`;

export const BtnBox = styled.div`
  &:last-child button {
    margin-left: 1.2rem;
  }
`;

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.user?.isAdmin);
  const token = useSelector((state) => state.user.user?.accessToken);

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch(reset());
  };

  return (
    <Container>
      <Link to="/">
        <LogoBox>
          <Logo src={logo} alt="logo-img" />
          <LogoTitle>MarketGreen</LogoTitle>
        </LogoBox>
      </Link>

      <NavList>
        <Items>
          <ItemLink>하는 일</ItemLink>
        </Items>
        <Items>
          <ItemLink>제품</ItemLink>
        </Items>
        <Items>
          <ItemLink>평가 후기</ItemLink>
        </Items>
        <Items>
          <ItemLink>가격</ItemLink>
        </Items>

        <BtnBox>
          {user && token ? (
            <>
              {admin && (
                <Link to="/admin">
                  <Button>관리자페이지</Button>
                </Link>
              )}
              <Link to="/profile">
                <Button>마이페이지</Button>
              </Link>

              <Button onClick={() => logout()}>로그아웃</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button>로그인</Button>
              </Link>
              <Link to="/register">
                <Button>회원가입</Button>
              </Link>
            </>
          )}
        </BtnBox>
      </NavList>
    </Container>
  );
};

export default Header;
