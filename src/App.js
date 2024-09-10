import React from "react";
import "./App.css";
import Home from "./Component/Pages/Home/index";
// import Team from "./Component/Pages/team";
import Service from "./Component/Pages/service/index";
// import FAQ from "./Component/Pages/faq";
import About from "./Component/Pages/About";
// import Count from "./Component/Pages/skill";
// import Clients from "./Component/Pages/clients";
import Tools from "./Component/Pages/tools";
// import Footer from "./Component/Pages/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/tools" element={<Tools/>}/>
          {/* <Route path="/teams" element={<Team/>}/>
          <Route path="/clients" element={<Clients/>}/> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
