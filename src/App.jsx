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

const App = () => {
  const auth = useSelector((state) => state.user.user?.accessToken);

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
      </Routes>
    </Router>
  );
};

export default App;
