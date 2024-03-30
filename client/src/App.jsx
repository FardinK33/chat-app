import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home.page";
import Login from "./pages/login.page";
import Signup from "./pages/signup.page";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
