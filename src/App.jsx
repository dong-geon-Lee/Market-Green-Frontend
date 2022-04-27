import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import ProfileEdit from "./pages/ProfileEdit";
import ProductForm from "./admin/pages/ProductForm";
import Admin from "./admin/pages/Admin";
import Product from "./pages/Product";
import ProductEdit from "./admin/pages/ProductEdit";

const App = () => {
  const user = useSelector((state) => state.user.user?.accessToken);
  const admin = useSelector((state) => state.user.user?.isAdmin);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/profileEdit"
          element={user ? <ProfileEdit /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/productForm"
          element={admin ? <ProductForm /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/productEdit"
          element={admin ? <ProductEdit /> : <Navigate replace to="/" />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
