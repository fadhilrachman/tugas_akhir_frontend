import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/auth/Login";

const RoutesPageAuth = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default RoutesPageAuth;
