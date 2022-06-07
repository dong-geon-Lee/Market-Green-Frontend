import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const iconScale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  & svg {
    position: fixed;
    bottom: 5%;
    right: 3%;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 2px solid #333;
    background-color: #fff;
    color: #333;
    cursor: pointer;
    animation: ${iconScale} 2s 1s infinite;
  }
`;

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container icon={iconScale}>
      {showScrollTopButton && <FaAngleDoubleUp onClick={scrollTop} />}
    </Container>
  );
};

export default ScrollToTop;
