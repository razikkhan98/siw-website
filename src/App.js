import React from "react";
import "./App.css";
import Home from "./Component/Pages/Home/index";
import About from "./Component/Pages/About";
import Footer from "./Component/Pages/footer";
import Team from "./Component/Pages/team";
import Service from "./Component/Pages/service";
import FAQ from "./Component/Pages/faq";
const App = () => {
  return (
    <>
      <Home />
      <About />
      <Team />
      <Service />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
