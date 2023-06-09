import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, P } from "react-router-dom";
import ListProduk from "./pages/home/ListProduk";
import store from "./store";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/profile";
import Admin from "./pages/admin";
import Keranjang from "./pages/keranjang";

function App() {
  const [showNav, setShowNav] = useState(false);
  const token = localStorage.getItem("token");
  return (
    <div className="">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            {/* {pathname} */}
            <Route path="/" element={<ListProduk />} />
            <Route path="/login" element={<Login setShowNav={setShowNav} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/keranjang" element={<Keranjang />} />
            {token ? (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
              </>
            ) : (
              ""
            )}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
