import React from "react";
import "./Second.scss";
import P1 from "../../Assests/Img/p1.jpg";
import P2 from "../../Assests/Img/p2.jpg";
import P3 from "../../Assests/Img/p3.jpg";
import Zoom from "react-reveal/Zoom";

const Second = () => {
  return (
    <div className="second">
      <Zoom bottom cascade>
        <div className="container">
          <div className="s-card">
            <div className="title">Преимущества цветной цифровой печати.</div>
            <div className="image">
              <img src={P1} alt="" />
            </div>

            <div className="body">
              Ниже мы постарались ответить на вопросы о преимуществах цифровой
              печати и срочной цифровой печати, которые больше всего интересуют
              наших заказчиков. Мы постарались донести информацию о том что
              цифровая печать: выгодна, цифровая печать позволяет печатать
              полиграфию срочно, действительно срочно; позволяет вам самим
              подготовить макет..
            </div>
          </div>

          <div className="s-card">
            <div className="title">
              Цифровая печать длиной до 660мм (66см) на плотностях до 350гр
            </div>
            <div className="image">
              <img src={P2} alt="" />
            </div>

            <div className="body">
              Онлайн-типография №1 Digital-Printing.ru рада предложить вам
              печать "длинных" форматов (до 33х66см) рекламной полиграфии на
              наших современных цифровых печатных машинах. Допустимая плотность
              бумаги и картона при этом составляет до 350гр (это плотнее
              стандартных визиток). Подобный увеличенный формат ..
            </div>
          </div>

          <div className="s-card">
            <div className="title">Открытие раздела интерьерной печати</div>
            <div className="image">
              <img src={P3} alt="" />
            </div>

            <div className="body">
              Мы рады сообщить вам о запуске раздела высококачественной
              Интерьерной печати больших и малых форматов. К вашим услугам самые
              разнообразные материалы от обычной бумаги, до плотных постеров с
              накаткой на пенокартон форматом от А3 (420х297мм) до А0+ шириной
              более метра (1120мм) и любой длиной
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Second;
