import React from 'react';
import './App.css';
import Home from "./Component/Pages/Home/index";
import About from './Component/Pages/About';
import Footer from './Component/Pages/footer';
import Team from './Component/Pages/team';
import { Routes, Route } from 'react-router-dom';
const App = () =>{
  return(
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
      </Routes>
    </>
  );
};

export default App;
