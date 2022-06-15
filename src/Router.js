import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation/Navigation";


const Router = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route 
        exact path="/home" 
        element={localStorage.getItem("token") ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
