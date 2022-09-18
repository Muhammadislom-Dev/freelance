import React from "react";
import "./ProductAbout.css";
import ruchka from "../../Assests/Img/ruchkas.png";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



function ProductAbout() {
  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Ручки</h2>
          <div className="product-box">
           <Zoom  cascade>
                <div className="product-list">
                <img src={ruchka} alt="" className="product-img" />
                <h4 className="product-names">Ручка шариковая BAY </h4>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 78,75 $
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Доступно</span> DP729491/327G
                </p>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 15004
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Бренд:</span> MAXEMA
                </p>
                </div>
                <div className="product-list">
                <img src={ruchka} alt="" className="product-img" />
                <h4 className="product-names">Ручка шариковая BAY </h4>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 78,75 $
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Доступно</span> DP729491/327G
                </p>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 15004
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Бренд:</span> MAXEMA
                </p>
                </div>
                <div className="product-list">
                <img src={ruchka} alt="" className="product-img" />
                <h4 className="product-names">Ручка шариковая BAY </h4>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 78,75 $
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Доступно</span> DP729491/327G
                </p>
                <p className="product-cost">
                    {" "}
                    <span>от</span> 15004
                </p>
                <p className="product-cost">
                    {" "}
                    <span>Бренд:</span> MAXEMA
                </p>
                </div>
            </Zoom>
            <Fade left cascade>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            </Fade>
            <Bounce right cascade>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            <div className="product-list">
              <img src={ruchka} alt="" className="product-img" />
              <h4 className="product-names">Ручка шариковая BAY </h4>
              <p className="product-cost">
                {" "}
                <span>от</span> 78,75 $
              </p>
              <p className="product-cost">
                {" "}
                <span>Доступно</span> DP729491/327G
              </p>
              <p className="product-cost">
                {" "}
                <span>от</span> 15004
              </p>
              <p className="product-cost">
                {" "}
                <span>Бренд:</span> MAXEMA
              </p>
            </div>
            </Bounce>
          </div>
      </div>
    </div>
  );
}

export default ProductAbout;
