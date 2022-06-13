import { css } from "styled-components";

// 1344px
export const desktops = (props) => {
  return css`
    @media only screen and (max-width: 84rem) {
      ${props}
    }
  `;
};

// 1200px
export const smallDesktops = (props) => {
  return css`
    @media only screen and (max-width: 75rem) {
      ${props}
    }
  `;
};

//  944px
export const Tablets = (props) => {
  return css`
    @media only screen and (max-width: 59rem) {
      ${props}
    }
  `;
};

//  816px
export const smallTablets = (props) => {
  return css`
    @media only screen and (max-width: 51rem) {
      ${props}
    }
  `;
};

//  576px
export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 36rem) {
      ${props}
    }
  `;
};
