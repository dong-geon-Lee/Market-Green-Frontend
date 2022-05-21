import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import { reset } from "../redux-toolkit/userSlice";
import { BsFillCartFill } from "react-icons/bs";
import { deleteStorage, deleteShipping } from "../redux-toolkit/cartSlice.js";

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
  display: flex;
  align-items: center;

  &:last-child button {
    margin-left: 1.2rem;
  }
`;

export const CartBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    width: 3rem;
    height: 3rem;
    margin: 0 0rem 0 1.5rem;
  }
`;

export const CartText = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 2rem;
  position: absolute;
  top: 0%;
  right: -40%;
  transform: translate(-50%, -50%);
  background-color: beige;
  padding: 0.5rem;
  border-radius: 50%;
`;

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.user?.isAdmin);
  const token = useSelector((state) => state.user.user?.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("shipping");
    localStorage.removeItem("cartItems");

    dispatch(reset());
    dispatch(deleteStorage());
    dispatch(deleteShipping());

    navigate("/");
  };

  const { cartItems } = useSelector((state) => state.cart);

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

              <Link to={`/cart`}>
                <CartBox>
                  <BsFillCartFill />
                  <CartText>{cartItems ? cartItems?.length : 0}</CartText>
                </CartBox>
              </Link>
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
