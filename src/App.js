import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduk from "./pages/home/ListProduk";
import store from "./store";

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<ListProduk />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
