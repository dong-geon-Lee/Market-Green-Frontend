import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo2.png";
import { reset } from "../redux-toolkit/userSlice";
import { BsFillCartFill } from "react-icons/bs";
import {
  deleteStorage,
  deleteShipping,
  deletePaymentMethod,
} from "../redux-toolkit/cartSlice.js";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 8vh;
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
  width: 5rem;
  height: 5rem;
`;

export const LogoTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 1px;
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
  line-height: 1.5;
  color: #333;
  font-size: 1.8rem;
  font-weight: 500;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: #4ba87d;
  color: #fff;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 1.2rem;
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
  justify-content: center;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* margin: 0 0rem 0 1.5rem; */
  }
`;

export const CartText = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 1.5rem;
  position: absolute;
  top: 0%;
  right: -28%;
  transform: translate(-50%, -50%);
  background-color: beige;
  padding: 0.5rem 0.6rem;
  border-radius: 50%;
`;

export const Navbar = styled.div`
  height: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-right: 2rem;
`;

export const LinkTag = styled(Link)`
  font-size: 3rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  color: #333;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  line-height: 1.5;
`;

export const Nav = styled.nav`
  width: 25rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.active ? "0%" : "-100%")};
  transition: ${(props) => (props.active ? "0.35s" : "0.85s")};
  z-index: 10;
`;

export const Side = styled.ul`
  width: 100%;
  background-color: #ebfbee;
`;

export const Toggle = styled.li`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  /* & svg {
    margin-right: 5rem;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

export const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.user?.isAdmin);
  const token = useSelector((state) => state.user.user?.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("shipping");
    localStorage.removeItem("cartItems");

    dispatch(reset());
    dispatch(deleteStorage());
    dispatch(deleteShipping());
    dispatch(deletePaymentMethod());
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
        <Navbar>
          <LinkTag to="#">
            <FaBars onClick={showSidebar} />
          </LinkTag>
        </Navbar>

        <Nav active={sidebar}>
          <Side>
            <Toggle>
              <LinkTag to="#">
                <AiOutlineClose onClick={showSidebar} />
              </LinkTag>
            </Toggle>

            <Content>
              {/* <Items>
                <ItemLink>About</ItemLink>
              </Items>
              <Items>
                <ItemLink>Product</ItemLink>
              </Items>
              <Items>
                <ItemLink>Testimonial</ItemLink>
              </Items>
              <Items>
                <ItemLink>Information</ItemLink>
              </Items> */}

              <LinkStyle to="/">
                <BsFillHouseFill style={{ marginRight: "1rem" }} />
                Home
              </LinkStyle>
              <BtnBox>
                {user && token ? (
                  <AdminBox>
                    {admin && (
                      <LinkStyle to="/admin">
                        <FaUserAlt style={{ marginRight: "1rem" }} />
                        Admin
                      </LinkStyle>
                    )}

                    <LinkStyle to="/profile">
                      <BsFillFileEarmarkPersonFill
                        style={{ marginRight: "1rem" }}
                      />
                      Profile
                    </LinkStyle>

                    <LinkStyle to="/" onClick={() => logout()}>
                      <BsDoorOpenFill style={{ marginRight: "1rem" }} />
                      Logout
                    </LinkStyle>

                    <LinkStyle to={`/cart`}>
                      <CartBox style={{ marginRight: "1rem" }}>
                        <BsFillCartFill style={{ marginRight: "1rem" }} />
                        <CartText>{cartItems ? cartItems?.length : 0}</CartText>
                      </CartBox>
                      Cart
                    </LinkStyle>
                  </AdminBox>
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
            </Content>
          </Side>
        </Nav>
      </NavList>
    </Container>
  );
};

export default Header;
