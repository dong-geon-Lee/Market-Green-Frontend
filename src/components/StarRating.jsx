import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from "styled-components";

export const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.div`
  font-size: 2rem;
  font-weight: 700;
  /* padding: 1.2rem 1.6rem; */

  & svg {
    fill: #ebb450;
  }
`;

export const Star = styled(Rating)`
  font-size: 1.2rem;
  padding: 0.8rem 0rem;
  font-size: 1.2rem;
`;

export const ReviewNum = styled(Rating)`
  padding: 1.2rem 1.6rem 1.2rem 0;
  margin-left: 1rem;
`;

const StarRating = ({ value }) => {
  return (
    <RatingBox>
      <Rating>
        {value >= 1 ? (
          <FaStar></FaStar>
        ) : value >= 0.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {value >= 2 ? (
          <FaStar></FaStar>
        ) : value >= 1.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {value >= 3 ? (
          <FaStar></FaStar>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {value >= 4 ? (
          <FaStar></FaStar>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {value >= 5 ? (
          <FaStar></FaStar>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
      </Rating>
      <ReviewNum>({value})</ReviewNum>
    </RatingBox>
  );
};

export default StarRating;
