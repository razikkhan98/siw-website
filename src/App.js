import "./App.css";
import HorizontalScroll from "react-scroll-horizontal";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Navbar from "./Component/Common/Navbar";
import { Route, Router,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
      <Navbar />
        <HorizontalScroll>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
          <Home/>
          <About/>
        </HorizontalScroll>
       
      </div>
    </>
  );
}

export default App;
