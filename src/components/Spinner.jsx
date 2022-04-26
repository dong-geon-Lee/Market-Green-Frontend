import React from "react";
import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

const Spinner = () => {
  return <SpinnerContainer></SpinnerContainer>;
};

export default Spinner;
