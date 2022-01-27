import React, { useState } from "react";

export default function Restaurant() {
  const slides = [
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb9395682db002347c49c_optimized_1396",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb928c917a00023a8f5fd_optimized_1396_c1396x930-0x0",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6e2d4f69666100237d3603_optimized_1396_c1396x930-0x0",
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    console.log(current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    console.log(current);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div
      className="w-blocks-group-wrapper blocks-group-wrapper_2QF"
      data-legacy="true"
      style={{}}
      data-hydrated="true"
    >
      <div
        id="blockId-5c472e1a6265a30025fe53b1"
        data-block-name="wireframe-series-18-projects"
        data-block-categories="projects"
        data-test="block-wrapper"
        data-anchor="projects-4"
        data-legacy="true"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div id="projects-4" style={{ display: "none" }} />
        <div
          className="w-block-background background-wrapper_RZ2"
          aria-hidden="true"
          data-background--hide="false"
        >
          <div
            className="background_2xT"
            data-role="placeholder"
            style={{ background: "rgb(255, 255, 255)" }}
          />
        </div>
        <section
          className="w-section w-text-left section--reverse__1HuPv"
          data-category="projects"
        >
          <div className="layout__2Nxbo w-layout w-layout--gap w-section__inner">
            <div className="layout__inner__1sqzR layout__inner__LqOy4 w-layout__inner w-section__content">
              <div className="article__content__2gqax layout__item__2LDW2 w-layout__item">
                <div className="article__content-inner__3bAsH">
                  <header className="w-section__header w-section__header--50">
                    <h2 className="text_1k0 ui-headingLg w-heading-lg">
                      <span
                        className="w-text-block"
                        style={{ display: "block" }}
                      >
                        <span className="w-text-content">РЕСТОРАН</span>
                      </span>
                    </h2>
                  </header>
                  <p className="text_1k0 ui-subheading w-subheading">
                    <span
                      style={{ display: "block" }}
                      className="w-text-block "
                    >
                      <span className="w-text-content">
                        Мы знаем, как важно вкусно обедать для хорошего отдыха.
                        Гарантируем, что даже самые требовательные гости будут
                        наслаждаться едой и вином в отеле Elbrus Plaza. Начните
                        свой день с питательного завтрака по меню, наслаждаясь
                        видом гор, свежим воздухом и природой кавказа.&nbsp;
                      </span>
                    </span>
                    <span
                      style={{ display: "block" }}
                      className="w-text-block "
                    >
                      <span className="w-text-content">
                        Обед и ужин сделают ваш отдых еще более приятным, что
                        позволит вам насладиться блюдами восточно европейской
                        кухни.
                      </span>
                    </span>
                  </p>
                  <div
                    className="w-btns-group"
                    style={{ justifyContent: "center" }}
                  >
                    <ul className="w-btns-group__inner">
                      <li className="w-btns-group__item hover-red-background">
                        <a
                          className="button_2W3 w-button ui-button ui-button--secondary-alt-light ui-button--size-md"
                          href="/"
                        >
                          <span className="button__border_1J- ui-button__border" />
                          <span className="button__inner_2of">
                            <span className="button__content_1_I">
                              СМОТРЕТЬ МЕНЮ
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="article__media__1hrsk layout__item__2LDW2 w-layout__item">
                <div className="items-wrapper___r9lf w-slider slider_3TN">
                  <div className="slick-slider slick-initialized" dir="ltr">
                    <button
                      onClick={prevSlide}
                      data-role="none"
                      className="slick-arrow slick-prev"
                      data-current-slide={0}
                      data-slide-count={3}
                      style={{ display: "block" }}
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 451.846 451.847"
                        style={{
                          enableBackground: "new 0 0 451.846 451.847",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" />
                      </svg>
                    </button>
                    <div className="slick-list" style={{ height: "363px" }}>
                      <div
                        className="slick-track"
                        style={{
                          width: "1710px",
                          opacity: 1,
                          transform: "translate3d(0px, 0px, 0px)",
                        }}
                      >
                        {slides.map((slide, index) => (
                          <React.Fragment key={index}>
                            {index === current && (
                              <div
                                data-index={0}
                                className="slick-slide slick-active slick-current"
                                tabIndex={-1}
                                aria-hidden="false"
                                style={{ outline: "none", width: "570px" }}
                              >
                                <div>
                                  <div className="item-0">
                                    <div
                                      className="item__TCrad item__3B-ot"
                                      style={{ paddingTop: "63.68%" }}
                                    >
                                      <div className="item__picture-wrapper__Bk_eH w-picture-wrapper media-wrapper_3VN">
                                        <picture
                                          className="item__picture__3d0pp w-picture ui-picture_2i5"
                                          style={{}}
                                        >
                                          <img
                                            alt=""
                                            className="w-picture__image ui-image_3aJ"
                                            src={slide}
                                            loading="lazy"
                                            style={{ objectFit: "cover" }}
                                          />
                                        </picture>
                                      </div>
                                      <div className="item__panel__DvZip background_3lr background w-state-has-background">
                                        <div
                                          className="background-wrapper_RZ2"
                                          aria-hidden="true"
                                          data-background--hide="false"
                                        >
                                          <div
                                            className="background_2xT"
                                            data-role="placeholder"
                                            style={{
                                              background:
                                                "rgba(255, 255, 255, 0.35)",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={nextSlide}
                      data-role="none"
                      className="slick-arrow slick-next"
                      data-current-slide={0}
                      data-slide-count={3}
                      style={{ display: "block" }}
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 451.846 451.847"
                        style={{
                          enableBackground: "new 0 0 451.846 451.847",
                          fill: "currentColor",
                        }}
                      >
                        <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" />
                      </svg>
                    </button>
                    <ul
                      className="slick-dots slider-dots__1-Kae"
                      style={{ display: "block" }}
                    >
                      <li className={current === 0 ? "slick-active" : ""}>
                        <button onClick={() => setCurrent(0)}>1</button>
                      </li>
                      <li className={current === 1 ? "slick-active" : ""}>
                        <button onClick={() => setCurrent(1)}>2</button>
                      </li>
                      <li className={current === 2 ? "slick-active" : ""}>
                        <button onClick={() => setCurrent(2)}>3</button>
                      </li>
                    </ul>
                  </div>
                  <div style={{ display: "none" }}>
                    <div data-slider-component="arrow-prev">
                      <button onClick={prevSlide}>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 451.846 451.847"
                          style={{
                            enableBackground: "new 0 0 451.846 451.847",
                            fill: "currentColor",
                          }}
                        >
                          <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" />
                        </svg>
                      </button>
                    </div>
                    <div data-slider-component="arrow-next">
                      <button onClick={nextSlide}>
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 451.846 451.847"
                          style={{
                            enableBackground: "new 0 0 451.846 451.847",
                            fill: "currentColor",
                          }}
                        >
                          <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744 L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284 c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
