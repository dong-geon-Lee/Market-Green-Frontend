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

//  672px
export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 42rem) {
      ${props}
    }
  `;
};

//  600px
export const normalMobile = (props) => {
  return css`
    @media only screen and (max-width: 37.5rem) {
      ${props}
    }
  `;
};

//  500px
export const smallMobile = (props) => {
  return css`
    @media only screen and (max-width: 31.25rem) {
      ${props}
    }
  `;
};
