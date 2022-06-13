import { css } from "styled-components";

// 1200px for large devices.
export const Desktops = (props) => {
  return css`
    @media only screen and (max-width: 75rem) {
      ${props}
    }
  `;
};

// 992px for laptops.
export const Laptops = (props) => {
  return css`
    @media only screen and (max-width: 62rem) {
      ${props}
    }
  `;
};

// 768px for tablets.
export const Tablets = (props) => {
  return css`
    @media only screen and (max-width: 48rem) {
      ${props}
    }
  `;
};

// 576px for portrait phones.
export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 36rem) {
      ${props}
    }
  `;
};
