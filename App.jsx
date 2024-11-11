// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/nav";
import { Home } from "./components/pages/home/homepage";
import { Questions } from "./components/pages/search/search";
import { List } from "./components/pages/search/listdispo"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="homepage" element={<Home />} />
        
        <Route path="search" element={<Questions />} />
      </Routes>
      
    </div>
  );
}

export default App;


{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<navBar />} />
        </Routes>
      </BrowserRouter> */}