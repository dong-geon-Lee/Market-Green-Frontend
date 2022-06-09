import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const RatingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.div`
  font-size: 2rem;
  font-weight: 700;

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

const SubStarRating = ({ value, totalRating }) => {
  return (
    <RatingBox>
      <Rating>
        {totalRating >= 1 ? (
          <FaStar></FaStar>
        ) : totalRating >= 0.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {totalRating >= 2 ? (
          <FaStar></FaStar>
        ) : totalRating >= 1.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {totalRating >= 3 ? (
          <FaStar></FaStar>
        ) : totalRating >= 2.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {totalRating >= 4 ? (
          <FaStar></FaStar>
        ) : totalRating >= 3.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
        {totalRating >= 5 ? (
          <FaStar></FaStar>
        ) : totalRating >= 4.5 ? (
          <FaStarHalfAlt></FaStarHalfAlt>
        ) : (
          <FaRegStar></FaRegStar>
        )}
      </Rating>

      <ReviewNum>({totalRating.toFixed(1)})</ReviewNum>
    </RatingBox>
  );
};

export default SubStarRating;
