import React from "react";
import styled from "styled-components";
import logo from "../assets/logo2.png";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
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

export const Link = styled.a`
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
  return (
    <Container>
      <LogoBox>
        <Logo src={logo} alt="logo-img" />
        <LogoTitle>MarketGreen</LogoTitle>
      </LogoBox>

      <NavList>
        <Items>
          <Link>하는 일</Link>
        </Items>
        <Items>
          <Link>제품</Link>
        </Items>
        <Items>
          <Link>평가 후기</Link>
        </Items>
        <Items>
          <Link>가격</Link>
        </Items>

        <BtnBox>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </BtnBox>
      </NavList>
    </Container>
  );
};

export default Header;
