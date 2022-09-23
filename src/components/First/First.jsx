import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import "./First.css";
import SlideBtn from "../../subcomponent/Slide/SlideBtn";

const slide_btn_styles = {
  color: "#5f9c95",
  borderColor: "#5f9c95",
};

function First() {

  const [activeIdx, setActiveIdx] = useState(1);
  const [activeIdxMob, setActiveIdxMob] = useState(0);
  const cardWidth = 200;

  return (
    <div id="category" className="first">
      <div className="container">
        <h2 className="first-names">Our Products</h2>
        <div className="first-page"  data-aos="fade-up" >
          <div
            className="first-list"
            style={{
              transform: `translateX(-${
                cardWidth * activeIdx + 30 * activeIdx
              }px)`,
            }}
          >
            {data.map((item, i) => (
              <Link
              to="/product"
                className="first-link"
                style={
                  activeIdx - 1 === i || activeIdx + 1 === i || activeIdx === i
                    ? {}
                    : { opacity: 0, pointerEvents: "none" }
                }
              >
                <div className="first-title">
                  <img src={item.img} alt="" className="first-img" />
                  <h4 className="first-name">{item.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="homeproducts__pagination">
            {data.map((_, i) => (
              <button
                key={i}
                className={`homeproducts__pagination-btn ${
                  activeIdx === i ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIdx((prev) => {
                    return i < 1
                      ? 1
                      : i > data.length - 2
                      ? data.length - 2
                      : i;
                  })
                }
              ></button>
            ))}
          </div>
            <SlideBtn
              className="homeproducts__slide-prev"
              onClick={() =>
                setActiveIdx((prev) =>
                  prev - 1 < 1 ? data.length - 2 : prev - 1
                )
              }
              style={{ ...slide_btn_styles, left: "15%" }}
            />
            <SlideBtn
              rightIcon
              className="homeproducts__slide-next"
              onClick={() =>
                setActiveIdx((prev) =>
                  prev + 1 > data.length - 2 ? 1 : prev + 1
                )
              }
              style={{ ...slide_btn_styles, left: "80%" }}
            />
        </div>

        <div className="first-pages"  data-aos="fade-up" >
          <div
            className="first-list first-lists"
            style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}
          >
            {data.map((e, i) => (
              <Link
              to="/product"
                className="first-link"
                style={(activeIdxMob === data.length - 1 && activeIdxMob - 1 === i) || activeIdxMob + 1 === i || activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <div className="first-title">
                  <img src={e.img} alt="" className="first-img" />
                  <h4 className="first-name">{e.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="homeproducts__pagination">
            {data.map((_, i) => (
              <button
              className={`homeproducts__pagination-btn ${activeIdxMob === i ? "active" : ""}`}
              onClick={() => setActiveIdxMob(i)}
              ></button>
            ))}
          </div>
            <SlideBtn
              className="homeproducts__slide-prev"
              onClick={() => setActiveIdxMob(prev => prev < 1 ? prev : prev - 1)}
              style={{ ...slide_btn_styles, left: "-100px" }}
            />
            <SlideBtn
              rightIcon
              className="homeproducts__slide-next"
              onClick={() => setActiveIdxMob(prev => prev + 1 > data.length - 2 ? prev : prev + 1)}
              style={{ ...slide_btn_styles, right: "-100px" }}
            />
        </div>

        <div className="first__page"  data-aos="fade-up" >
          <div
            className="first-list first-lists"
            style={{ transform: `translateX(-${(cardWidth * activeIdxMob) + (30 * activeIdxMob)}px)` }}
          >
            {data.map((e, i) => (
              <Link
              to="/product"
                className="first-link"
                style={activeIdxMob === i ? {} : { opacity: 0, pointerEvents: "none" }}
              >
                <div className="first-title">
                  <img src={e.img} alt="" className="first-img" />
                  <h4 className="first-name">{e.title}</h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="homeproducts__pagination">
            {data.map((_, i) => (
              <button
              className={`homeproducts__pagination-btn ${activeIdxMob === i ? "active" : ""}`}
              onClick={() => setActiveIdxMob(i)}
              ></button>
            ))}
          </div>
            <SlideBtn
              className="homeproducts__slide-prev"
              onClick={() => setActiveIdxMob(prev => prev < 1 ? prev : prev - 1)}
              style={{ ...slide_btn_styles, left: "-100px" }}
            />
            <SlideBtn
              rightIcon
              className="homeproducts__slide-next"
              onClick={() => setActiveIdxMob(prev => prev + 1 > data.length - 1 ? prev : prev + 1)}
              style={{ ...slide_btn_styles, right: "-100px" }}
            />
        </div>
      </div>
    </div>
  );
}

export default First;
