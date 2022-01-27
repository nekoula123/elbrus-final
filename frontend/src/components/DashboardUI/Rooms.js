import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Rooms() {
  const rooms = [
    {
      first_image:
        "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1200_c1200x800-0x0.webp",
      second_image:
        "http://res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1200.webp",
      type: "Стандартный",
      size: "15",
      guests: "2",
      discription:
        "В наших стандартных номерах комфорт отлично сочетается с качеством и функциональностью, есть все для хорошего отдыха.",
    },
    {
      first_image:
        "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6641005deb29002379943e_optimized_1200.webp",
      second_image:
        "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d66414ab173b600244b724a_optimized_1200.webp",
      type: "Стандартный +",
      size: "20",
      guests: "3",
      discription:
        "В номере европейский классический стиль имеются дополнительные места для взрослых и детей от 5 до 16 лет.",
    },
    {
      first_image:
        "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6640355deb29002379927d_optimized_1200.webp",
      second_image:
        "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d664015b173b600244b6e0d_optimized_1200.webp",
      type: "Панорама",
      size: "25",
      guests: "3",
      discription:
        "В наших панорамных номерах можно насладиться красивым видам на склоны горы Эльбрус. Это не забываемый вид и приятные ощущения.",
    },
  ];

  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5c4729ca6265a30025fe4ca2"
        data-block-name="wireframe-series-17-projects"
        data-block-categories="projects"
        data-test="block-wrapper"
        data-anchor="projects-2"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div style={{ display: "none" }} id="projects-2" />
        <div
          className="w-block-background background-wrapper_RZ2"
          aria-hidden="true"
          data-background--hide="false"
          data-component="background"
          data-type="color"
          data-data-loaded="true"
        >
          <div
            className="background_2xT"
            style={{ background: "#fff" }}
            data-role="placeholder"
          />
        </div>
        <section className="w-section w-text-center" data-category="projects">
          <div className="w-section__inner">
            <header className="w-section__header">
              <h2
                className="text_1k0 ui-headingLg w-heading-lg"
                data-component="text"
              >
                <span className="w-text-block" style={{ display: "block" }}>
                  <span className="w-text-content">НОМЕРА</span>
                </span>
              </h2>
              <p
                className="text_1k0 ui-subtitle w-subtitle"
                data-component="text"
              >
                <span className="w-text-block" style={{ display: "block" }}>
                  <span className="w-text-content">
                    Все наши просторные номера оформлены в европейском стиле,
                    чтобы сделать ваше пребывание комфортным и расслабляющим.
                  </span>
                </span>
              </p>
            </header>
            <div className="w-section__content">
              <div
                data-component="collection"
                data-collection-mode="collection"
                className="collection w-b0ead99c07f898de42a9e62f067bd3f8 w-list w-list--custom-padding"
                data-items-count={3}
              >
                <ul className="w-list__inner">
                  {rooms.map((image, index) => (
                    <li key={index} className="w-list__item-wrapper">
                      <div className="w-list__item w-layout w-layout--gap w-text-left item__1mxAn layout__2srSs w-088754deb0dd8820b733e12d9894218e">
                        <div className="w-layout__inner layout__inner__3T8iW">
                          <div className="w-layout__item layout__item__3NZ26 item__media__3MjTc">
                            <div className="picture-wrapper__1Ebz-">
                              <div className="picture-wrapper__inner__sALPU">
                                <div className="w-picture-wrapper item__picture-wrapper___HkkR media-wrapper_3VN">
                                  <picture
                                    className="w-picture item__picture__2SrXY ui-picture_2i5"
                                    data-component="picture"
                                    data-images='[{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1200_c1200x800-0x0","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1920_c1920x1280-0x0","media":"min-width: 768px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_768_c768x512-0x0","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1536_c1536x1024-0x0","media":"min-width: 480px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_480_c480x320-0x0","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_960_c960x640-0x0","media":"min-width: 320px"}]'
                                    data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1396_c1396x930-0x0"
                                    data-was-processed="true"
                                    data-loaded="true"
                                  >
                                    <img
                                      alt="Pic about a project"
                                      data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663bae7a1f8a0024c4ca46_optimized_1396_c1396x930-0x0"
                                      className="ui-image_3aJ"
                                      style={{
                                        objectFit: "cover",
                                        objectPosition: "36.302% 50%",
                                        fontFamily: "object-fit: cover",
                                      }}
                                      src={image.first_image}
                                    />
                                  </picture>
                                </div>
                              </div>
                              <div className="picture-wrapper__inner__sALPU">
                                <div className="w-picture-wrapper item__picture-wrapper___HkkR media-wrapper_3VN">
                                  <picture
                                    className="w-picture item__picture__2SrXY ui-picture_2i5"
                                    data-component="picture"
                                    data-images='[{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1200","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized","media":"min-width: 768px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_768","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1536","media":"min-width: 480px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_480","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_960","media":"min-width: 320px"}]'
                                    data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1395"
                                    data-was-processed="true"
                                    data-loaded="true"
                                  >
                                    <img
                                      alt="Pic about a project"
                                      data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1395"
                                      className="ui-image_3aJ"
                                      style={{
                                        objectFit: "cover",
                                        fontFamily: "object-fit: cover",
                                      }}
                                      src={image.second_image}
                                    />
                                  </picture>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-layout__item item__content__12l-l layout__item__3NZ26">
                            <div className="w-layout w-layout--gap content__fowS4">
                              <div className="w-layout__inner content__inner__3EH4o">
                                <ul className="w-layout__item item__list__ORtNn content__item__W6KSY">
                                  <li className="w-layout brief__2hQGy">
                                    <div className="w-layout__inner w-disable-offset brief__inner__3KjBA">
                                      <h3
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            Тип:
                                          </span>
                                        </span>
                                      </h3>
                                      <p
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {image.type}
                                            </span>
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </li>
                                  <li className="w-layout brief__2hQGy">
                                    <div className="w-layout__inner w-disable-offset brief__inner__3KjBA">
                                      <h3
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            Площадь:
                                          </span>
                                        </span>
                                      </h3>
                                      <p
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {image.size} m2
                                            </span>
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </li>
                                  <li className="w-layout brief__2hQGy">
                                    <div className="w-layout__inner w-disable-offset brief__inner__3KjBA">
                                      <h3
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            Гостей:
                                          </span>
                                        </span>
                                      </h3>
                                      <p
                                        className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                        data-component="text"
                                      >
                                        <span
                                          className="w-text-block"
                                          style={{ display: "block" }}
                                        >
                                          <span className="w-text-content">
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              {image.guests}{" "}
                                            </span>
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                                <p
                                  className="w-layout__item item__body__QA3_9 content__item__W6KSY text_1k0 ui-text w-body"
                                  data-component="text"
                                >
                                  <span
                                    className="w-text-block"
                                    style={{ display: "block" }}
                                  >
                                    <span className="w-text-content">
                                      {image.discription}
                                    </span>
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="w-btns-group w-btns-group--center w-btns-group--lg-left">
                              <ul className="w-btns-group__inner">
                                <li className="w-btns-group__item">
                                  <ScrollLink
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                    to="myScrollToElement"
                                    data-animation="fade-in-top_1sq normal_2Pr"
                                    className="button_2W3 w-button ui-button ui-button--primary-light ui-button--size-md button--font-weight-bold_1Nu fade-in-top_1sq normal_2Pr"
                                  >
                                    <span className="button__border_1J- ui-button__border" />
                                    <span className="button__inner_2of">
                                      <span className="button__content_1_I">
                                        ЗАБРОНИРОВАТЬ
                                      </span>
                                    </span>
                                  </ScrollLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <footer className="w-section__footer">
              <div className="w-btns-group w-btns-group--center">
                <ul className="w-btns-group__inner">
                  <li className="w-btns-group__item hover-red-background">
                    <Link
                      data-component="button"
                      className="button_2W3 w-button ui-button ui-button--secondary-alt-light ui-button--size-md button--font-weight-bold_1Nu"
                      to="/accommodation"
                    >
                      <span className="button__border_1J- ui-button__border" />
                      <span className="button__inner_2of">
                        <span className="button__content_1_I">
                          СМОТРЕТЬ ВСЕ НОМЕРА
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
