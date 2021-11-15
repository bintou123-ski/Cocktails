import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

//import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
//import component
import Navbar from "./component/Navbar";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
           <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
  )
}
