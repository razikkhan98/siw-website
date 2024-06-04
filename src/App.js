import React from 'react';
import './App.css';
import Home from "./Component/Pages/Home/index";
import About from './Component/Pages/About';
import Footer from './Component/Pages/footer';
import Team from './Component/Pages/team';
const App = () =>{
  return(
    <>
      <Home/>
      <About/>
      {/* <Team/>
      <Footer/> */}
    </>
  );
};

export default App;
