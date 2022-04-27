import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  } 
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContent = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border: 8px solid;
  border-color: #000 #555;
  border-radius: 50%;
  animation: ${(props) => props.spin} 1.2s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerContent spin={spin}></SpinnerContent>
    </SpinnerContainer>
  );
};

export default Spinner;
