import React from "react";
import "./App.css";
import Home from "./Component/Pages/Home/index";
import Footer from "./Component/Pages/footer";
// import Team from "./Component/Pages/team";
import Service from "./Component/Pages/service/index";
import FAQ from "./Component/Pages/faq";
import About from "./Component/Pages/About";
import Count from "./Component/Pages/skill";
import Clients from "./Component/Pages/clients";
// import Work from "./Component/Pages/work/index";
// import Teamdemo from "./Component/Pages/team-demo/team-demo.jsx";
const App = () => {
  return (
    <>
      <Home />
      <About/>
      {/* <Team /> */}
    {/* <Work/> */}
    {/* <Teamdemo/> */}
      <Service />
    <Count/>
    <Clients/>
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
