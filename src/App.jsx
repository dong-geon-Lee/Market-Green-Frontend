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
import Product from "./pages/Product";

const App = () => {
  const auth = useSelector((state) => state.user.user);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/profile"
          element={auth ? <Profile /> : <Navigate replace to="/" />}
        ></Route>
        <Route
          path="/profileEdit"
          element={auth ? <ProfileEdit /> : <Navigate replace to="/" />}
        ></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
