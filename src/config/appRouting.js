import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screen/home";
import About from "../screen/about";
import SMcontact from "../screen/contact";
import Detail from "../screen/Detail";
import SeeAll from "../screen/SeeAll";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/home">Home Page</Link>
          <Link to="/about">About Page</Link>
          <Link to="/contact">contact Page</Link>
          <Link to="/Detail">Detail Page</Link>
          <Link to="/SeeAll">See All Page</Link>



        </nav>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<SMcontact/>} />
          <Route path="Detail" element={<Detail />} />
          <Route path="SeeAll" element={<SeeAll />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}