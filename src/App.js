import React, {  } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./Component/Home";
import Navbar from "./Component/navbar/Navbar";
import About from "./Component/About";
import SliderHome from "./Component/Slider";
import SearchBar from "./Component/shop/SearchBar";
import { CartProvider } from "./Component/CartContext";
import Check from "./Component/Check";
import LogIn from "./Component/login";
import Signup from "./Component/signup";
import Support from "./Component/support";
import Details from "./Component/details";

const App=()=> {
  return (
    <Router>
      <div>
        <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/sliderhome" element={<SliderHome/>} />
          <Route path="/Search" element={<SearchBar/>} />
          <Route path="/check" element={<Check/>} />
          <Route path="/Login" element={<LogIn/>} />
          <Route path="/SignUp" element={<Signup/>} />
          <Route path="/Support" element={<Support/>} />
          <Route path="/details" element={<Details/>} />

        </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
