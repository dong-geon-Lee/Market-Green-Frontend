import React from "react";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const Container = styled.div`
  max-width: 130rem;
  padding: 6rem 3.2rem 0rem 3.2rem;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6rem 0rem;
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1.3;
`;

export const ContactGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const AccountGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const CompanyGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const ResourceGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #7ed56f;
`;

export const ContactTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
  text-align: left;
  width: 100%;
`;

export const AccountTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const CompanyTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const ResourceTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 2rem;

  & svg {
    font-size: 2rem;
    fill: grey;
  }
`;

export const Small = styled.small`
  font-size: 1.2rem;
  line-height: 1.8;
  width: 75%;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  row-gap: 2rem;
  text-align: left;
`;

const Footer = () => {
  return (
    <Container>
      <hr />
      <Wrapper>
        <LogoGroup>
          <Title>MargetGreen</Title>
          <IconBox>
            <BsInstagram></BsInstagram>
            <BsFacebook></BsFacebook>
            <BsTwitter></BsTwitter>
          </IconBox>
          <Small>
            Copyright © 2022 by MarketGreen, Inc. All rights reserved.
          </Small>
        </LogoGroup>

        <ContactGroup>
          <ContactTitle>Contact us</ContactTitle>
          <TextBox>
            <Text>623 Harrison St., 2nd Floor, San Francisco, CA 94107</Text>
            <Text>415-201-6370 margetgreen@omnifood.com</Text>
          </TextBox>
        </ContactGroup>

        <AccountGroup>
          <AccountTitle>Account</AccountTitle>
          <Text>Create account</Text>
          <Text>Sign in</Text>
          <Text>Ios app</Text>
          <Text>Android app</Text>
        </AccountGroup>

        <CompanyGroup>
          <CompanyTitle>Company</CompanyTitle>
          <Text>About Marketgreen</Text>
          <Text>For Business</Text>
          <Text>ParterShip</Text>
          <Text>Careers</Text>
        </CompanyGroup>

        <ResourceGroup>
          <ResourceTitle>Resources</ResourceTitle>
          <Text>Help center</Text>
          <Text>Privacy & terms</Text>
          <Text>Plant information</Text>
        </ResourceGroup>
      </Wrapper>
    </Container>
  );
};

export default Footer;
