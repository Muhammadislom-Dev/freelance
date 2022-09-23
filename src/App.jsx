import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About1 from "./components/AboutProduct/About1";
import About2 from "./components/AboutProduct/About2";
import About3 from "./components/AboutProduct/About3";
import Carousel from "./components/Carousel/Carousel";
import Company from "./components/Company/Company";
import First from "./components/First/First";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import Map from "./components/Map/Map";
import Navbar from "./components/Navbar/Navbar";
import ProductAbout from "./components/ProductAbout/ProductAbout";
import ProductPage from "./components/ProductPage/ProductPage";
import Second from "./components/Second/Second";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";
import TextPage from "./components/TextPage/TextPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <First />
              <Section />
              <ProductPage />
              <Carousel />
              <TextPage />
            </>
          }
        />
        <Route
          path="about1"
          element={
            <>
              <About1 />
            </>
          }
        />
        <Route
          path="about2"
          element={
            <>
              <About2 />
            </>
          }
        />
        <Route
          path="about3"
          element={
            <>
              <About3 />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <ProductAbout />
              <Second />
            </>
          }
        />
        {/* <Route path="/about" element={<ProductPage />} /> */}
        <Route
          path="/company"
          element={
            <>
              <Company />
              <Carousel />
            </>
          }
        />
      </Routes>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
