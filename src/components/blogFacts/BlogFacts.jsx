import React from "react";

//импорт стилей
import "./blogFacts.scss";

function BlogFacts() {
  return (
    <>
      <div className="blogFacts">
        <span className="blogFactsName">Факты о кроссовках</span>
        <div className="blogFactsGrid">
          <div className="blogCarts">
            <div className="blogCartsDivImages">
              <img
                src="https://moveonline.ru/upload/iblock/6c4/jiidzbqb4y7dh9mj8exzeh8ne9n019v4.jpg"
                alt=""
                className="blogCartsDivImages__images"
              />
            </div>
            <div className="blogCartsDivInformation">
              <h1 className="blogCartsDivInformation__nameSneakers">
                КРОССОВКИ NIKE AIR MAX 270
              </h1>
              <span className="blogCartsDivInformation__descriptionSneakers">
                Nike Air Max 720 Saturn представлен в <br /> совершенно новой
                цветовой гамме Black / Team Orange.
              </span>
            </div>
          </div>

          <div className="blogCarts">
            <div className="blogCartsDivImages">
              <img
                src="https://moveonline.ru/upload/iblock/6c4/jiidzbqb4y7dh9mj8exzeh8ne9n019v4.jpg"
                alt=""
                className="blogCartsDivImages__images"
              />
            </div>
            <div className="blogCartsDivInformation">
              <h1 className="blogCartsDivInformation__nameSneakers">
                КРОССОВКИ NIKE AIR MAX 270
              </h1>
              <span className="blogCartsDivInformation__descriptionSneakers">
                Nike Air Max 720 Saturn представлен в <br /> совершенно новой
                цветовой гамме Black / Team Orange.
              </span>
            </div>
          </div>

          <div className="blogCarts">
            <div className="blogCartsDivImages">
              <img
                src="https://moveonline.ru/upload/iblock/6c4/jiidzbqb4y7dh9mj8exzeh8ne9n019v4.jpg"
                alt=""
                className="blogCartsDivImages__images"
              />
            </div>
            <div className="blogCartsDivInformation">
              <h1 className="blogCartsDivInformation__nameSneakers">
                КРОССОВКИ NIKE AIR MAX 270
              </h1>
              <span className="blogCartsDivInformation__descriptionSneakers">
                Nike Air Max 720 Saturn представлен в <br /> совершенно новой
                цветовой гамме Black / Team Orange.
              </span>
            </div>
          </div>
        </div>
        <div className="subscribe-form">
      <div className="subscribe-form__header">
        ПОДПИШИСЬ НА РАССЫЛКУ<br />И ПОЛУЧИ СКИДКУ ДО 10%
      </div>
      <input
        type="email"
        placeholder="Введите Ваш email"
        className="subscribe-form__input"
      />
      <button className="subscribe-form__button">Подписаться</button>
      <p className="subscribe-form__privacy">Политика конфиденциальности</p>
    </div>

      </div>
    </>
  );
}

export default BlogFacts;
