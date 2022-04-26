import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>관리자 페이지</h1>

      <Link to="/productForm">
        <h1>상품 등록하기</h1>
      </Link>
      <Link to="/productEdit">
        <h1>상품 수정하기</h1>
      </Link>
    </>
  );
};

export default Admin;
