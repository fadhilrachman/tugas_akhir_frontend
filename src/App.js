import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ListProduk from "./pages/home/ListProduk";
import store from "./store";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="">
      <BrowserRouter>
        <Provider store={store}>
          {showNav && <Navbar />}
          <Routes>
            {/* {pathname} */}
            <Route path="/" element={<ListProduk />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
