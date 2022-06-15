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
import { FaInfoCircle } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { HiSpeakerphone } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
import { SiWebhint } from "react-icons/si";
import { FaEnvira } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { BsFillImageFill } from "react-icons/bs";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 9vh;
  padding: 0 3.2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;

  & a {
    text-decoration: none;
    color: #212529;
  }
`;

export const LogoHome = styled.div`
  cursor: pointer;
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
  transition: all 0.3s ease;
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
  width: 100%;
  background-color: transparent;
  color: black;
  font-family: inherit;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.4rem 1.2rem;
  border: none;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 100%;

  &:last-child button {
    margin-left: 1.2rem;
  }
`;

export const CartBox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  background-color: transparent;
  border-radius: 9px;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: black;
  }
`;

export const CartText = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 1.5rem;
  position: absolute;
  top: 25%;
  left: 42%;
  transform: translate(-50%, -50%);
  background-color: beige;
  padding: 0.5rem 0.6rem;
  border-radius: 50%;
`;

export const CartSubText = styled.p`
  color: black;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5;
  margin-left: 0.5rem;
`;

export const Navbar = styled.div`
  height: 8rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const LinkTag = styled(Link)`
  font-size: 3rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyle = styled(Link)`
  width: 100%;
  color: #333;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding: 1.4rem 0;

  transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;
  }
`;

export const NavText = styled.a`
  color: #333;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  line-height: 1.5;
  cursor: pointer;
  padding: 1.4rem 0;
  width: 100%;
  border-radius: 9px;
  justify-content: center;

  transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
  text-transform: uppercase;
  background-size: 220%;

  &:hover {
    background-image: linear-gradient(
      120deg,
      #ebfbee 20%,
      #fff 30%,
      #69db7c 50%
    );
    background-position: 100%;
    background-color: #40c057;
  }
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdminBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .cartLink {
    padding: 1.4rem 0;

    transition: all 0.25s cubic-bezier(0.68, 0.1, 0.75, 1.5);
    text-transform: uppercase;
    background-size: 220%;

    &:hover {
      background-image: linear-gradient(
        120deg,
        #ebfbee 20%,
        #fff 30%,
        #69db7c 50%
      );
      background-position: 100%;
      background-color: #40c057;
    }
  }
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

  const adminLink = () => {
    navigate("/admin");
  };

  const loginLink = () => {
    navigate("/login");
  };

  const registerLink = () => {
    navigate("/register");
  };

  const homeLink = () => {
    navigate("/");
  };

  const profileLink = () => {
    navigate("/profile");
  };

  const cartLink = () => {
    navigate("/cart");
  };

  return (
    <Container>
      <LogoHome onClick={() => homeLink()}>
        <LogoBox>
          <Logo src={logo} alt="logo-img" />
          <LogoTitle>MarketGreen</LogoTitle>
        </LogoBox>
      </LogoHome>
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
              <Button onClick={() => homeLink()}>
                <BsFillHouseFill style={{ marginRight: "1rem" }} />
                Home
              </Button>

              <BtnBox>
                {user && token ? (
                  <AdminBox>
                    {admin && (
                      <Button onClick={() => adminLink()}>
                        <FaUserAlt style={{ marginRight: "1rem" }} />
                        Admin
                      </Button>
                    )}
                    <Button onClick={() => profileLink()}>
                      <BsFillFileEarmarkPersonFill
                        style={{ marginRight: "1rem", fontSize: "2.3rem" }}
                      />
                      Profile
                    </Button>

                    <CartBox
                      className="cartLink"
                      onClick={() => cartLink()}
                      style={{ marginRight: "1rem" }}
                    >
                      <BsFillCartFill style={{ marginRight: "1rem" }} />

                      <CartText>{cartItems ? cartItems?.length : 0}</CartText>
                      <CartSubText>Cart</CartSubText>
                    </CartBox>
                    <LinkStyle to="/" onClick={() => logout()}>
                      <BsDoorOpenFill style={{ marginRight: "1rem" }} />
                      Logout
                    </LinkStyle>
                  </AdminBox>
                ) : (
                  <>
                    <div onClick={() => loginLink()}>
                      <Button>로그인</Button>
                    </div>
                    <div onClick={() => registerLink()}>
                      <Button>회원가입</Button>
                    </div>
                  </>
                )}
              </BtnBox>

              <NavText href="#" onClick={showSidebar}>
                <BsFillImageFill style={{ marginRight: "1rem" }} />
                Hero
              </NavText>

              <NavText href="#intro" onClick={showSidebar}>
                <FaNetworkWired style={{ marginRight: "1rem" }} />
                Introduce
              </NavText>

              <NavText href="#about" onClick={showSidebar}>
                <FaInfoCircle style={{ marginRight: "1rem" }} />
                About
              </NavText>

              <NavText href="#products" onClick={showSidebar}>
                <GrProductHunt style={{ marginRight: "1rem" }} />
                Product
              </NavText>

              <NavText href="#testimonials" onClick={showSidebar}>
                <HiSpeakerphone style={{ marginRight: "1rem" }} />
                Testimonials
              </NavText>

              <NavText href="#information" onClick={showSidebar}>
                <SiWebhint style={{ marginRight: "1rem" }} />
                Promotion
              </NavText>

              <NavText href="#gallery" onClick={showSidebar}>
                <FaPhotoVideo style={{ marginRight: "1rem" }} />
                Gallery
              </NavText>

              <NavText href="#footer" onClick={showSidebar}>
                <FaEnvira style={{ marginRight: "1rem" }} />
                Footer
              </NavText>
            </Content>
          </Side>
        </Nav>
      </NavList>
    </Container>
  );
};

export default Header;
