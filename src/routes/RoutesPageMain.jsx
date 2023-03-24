import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ListProduk from "../pages/home/ListProduk";

const RoutesPageMain = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProduk />} />
      </Routes>
    </>
  );
};

export default RoutesPageMain;
