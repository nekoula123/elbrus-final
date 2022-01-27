import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ReactComponent as EditSVG } from "../../assets/svgs/Edit.svg";
import { fetchData } from "../../api/fetchData";

export default function Rooms({ token }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchData().then((response) => setRooms(response));
  }, []);

  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5c4744806265a30025fe7226"
        data-block-name="wireframe-series-17-projects"
        data-block-categories="projects"
        data-test="block-wrapper"
        data-anchor="projects"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div style={{ display: "none" }} id="projects" />
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
                className="text_1k0 ui-blockTitle w-title"
                data-component="text"
              >
                <span className="w-text-block" style={{ display: "block" }}>
                  <span className="w-text-content">Номера</span>
                </span>
              </h2>
              <p
                className="text_1k0 ui-subtitle w-subtitle"
                data-component="text"
              >
                <span style={{ display: "block" }} className="w-text-block ">
                  <span className="w-text-content">
                    наши просторные номера оформлены в европейском стиле,&nbsp;
                  </span>
                </span>
                <span style={{ display: "block" }} className="w-text-block ">
                  <span className="w-text-content">
                    чтобы сделать ваше пребывание комфортным.
                  </span>
                </span>
              </p>
            </header>
            <div className="w-section__content">
              <div
                data-component="collection"
                data-collection-mode="collection"
                className="collection w-b0ead99c07f898de42a9e62f067bd3f8 w-list w-list--custom-padding"
                data-items-count={9}
              >
                <ul className="w-list__inner">
                  {rooms &&
                    rooms.map((room) => (
                      <li key={room._id} className="w-list__item-wrapper">
                        <div className="w-list__item w-layout w-layout--gap w-text-left item__1mxAn layout__2srSs w-088754deb0dd8820b733e12d9894218e collection-item-background-wrapper_3F2 w-state-has-background background">
                          <div
                            className="background-wrapper_RZ2"
                            aria-hidden="true"
                            data-component="background"
                            data-type="image"
                            data-hydrate='{"style":{"background":"#fff"},"backgroundClassName":"background_2xT","isParallax":false,"filterStyle":{}}'
                            data-data-loaded="true"
                          >
                            <div
                              className="background_2xT"
                              style={{ background: "#fff" }}
                              data-role="placeholder"
                            />
                          </div>
                          <div className="w-layout__inner layout__inner__3T8iW">
                            <div className="w-layout__item layout__item__3NZ26 item__media__3MjTc">
                              <div className="picture-wrapper__1Ebz-">
                                <div className="picture-wrapper__inner__sALPU">
                                  <div className="w-picture-wrapper item__picture-wrapper___HkkR media-wrapper_3VN">
                                    <picture
                                      className="w-picture item__picture__2SrXY ui-picture_2i5"
                                      data-component="picture"
                                      data-images='[{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_1200","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized","media":"min-width: 768px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_768","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_1536","media":"min-width: 480px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_480","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_960","media":"min-width: 320px"}]'
                                      data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_930"
                                      data-was-processed="true"
                                      data-loaded="true"
                                    >
                                      <img
                                        alt="Pic about a project"
                                        data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665af07f01fb0024a815e8_optimized_930"
                                        className="ui-image_3aJ"
                                        style={{
                                          objectFit: "cover",
                                          fontFamily: "object-fit: cover",
                                        }}
                                        src={room.first_image}
                                      />
                                    </picture>
                                  </div>
                                </div>
                                <div className="picture-wrapper__inner__sALPU">
                                  <div className="w-picture-wrapper item__picture-wrapper___HkkR media-wrapper_3VN">
                                    <picture
                                      className="w-picture item__picture__2SrXY ui-picture_2i5"
                                      data-component="picture"
                                      data-images='[{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_1200","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized","media":"min-width: 768px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_768","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_1536","media":"min-width: 480px"},{"optimized":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_480","optimized2x":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_960","media":"min-width: 320px"}]'
                                      data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_930"
                                      data-was-processed="true"
                                      data-loaded="true"
                                    >
                                      <img
                                        alt="Pic about a project"
                                        data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d665b367a1f8a0024c59ca8_optimized_930"
                                        className="ui-image_3aJ"
                                        style={{
                                          objectFit: "cover",
                                          fontFamily: "object-fit: cover",
                                        }}
                                        src={room.second_image}
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
                                                {room.type}
                                              </span>
                                              {token ? (
                                                <Link
                                                  to={`/edit/${room._id}`}
                                                  style={{
                                                    marginLeft: "20px",
                                                    cursor: "pointer",
                                                  }}
                                                >
                                                  <EditSVG />
                                                </Link>
                                              ) : null}
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
                                                {room.size} m2
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
                                            style={{ display: "block" }}
                                            className="w-text-block "
                                          >
                                            <span className="w-text-content">
                                              Гостей:
                                            </span>
                                          </span>
                                          <span
                                            style={{
                                              display: "block",
                                              marginTop: "15px",
                                            }}
                                            className="w-text-block "
                                          >
                                            <span className="w-text-content">
                                              Цена:
                                            </span>
                                          </span>
                                        </h3>
                                        <p
                                          className="w-layout__item brief__item__2AEQu text_1k0 ui-subheading w-subheading"
                                          data-component="text"
                                        >
                                          <span
                                            style={{ display: "block" }}
                                            className="w-text-block "
                                          >
                                            <span className="w-text-content">
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {room.guests}
                                              </span>
                                            </span>
                                          </span>
                                          <span
                                            style={{
                                              display: "block",
                                              marginTop: "15px",
                                            }}
                                            className="w-text-block "
                                          >
                                            <span className="w-text-content">
                                              <del>
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  {room.price.old}
                                                </span>
                                              </del>
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {room.price.old ? (
                                                  <React.Fragment>
                                                    {" "}
                                                    -{" "}
                                                  </React.Fragment>
                                                ) : null}
                                              </span>
                                              <span
                                                className={
                                                  room.price.old
                                                    ? "text-ui-brand-color"
                                                    : ""
                                                }
                                                style={{
                                                  color:
                                                    "var(--ui-brand-color)",
                                                }}
                                              >
                                                <span
                                                  style={{ fontWeight: "bold" }}
                                                >
                                                  {room.price.new}
                                                </span>
                                              </span>
                                              <span
                                                style={{ fontWeight: "bold" }}
                                              >
                                                {" "}
                                                руб./сутки
                                              </span>
                                            </span>
                                          </span>
                                        </p>
                                      </div>
                                    </li>
                                  </ul>
                                  <p
                                    style={{ lineHeight: "1.6" }}
                                    className="w-layout__item item__body__QA3_9 content__item__W6KSY text_1k0 ui-text w-body"
                                    data-component="text"
                                  >
                                    <span
                                      style={{ display: "block" }}
                                      className="w-text-block "
                                    >
                                      <span className="w-text-content">
                                        {room.discription}
                                      </span>
                                    </span>
                                    <br />
                                    <span
                                      style={{ display: "block" }}
                                      className="w-text-block "
                                    >
                                      <span className="w-text-content">
                                        <a
                                          href="https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=elbrusplaza&InvId=0&Culture=ru&Encoding=utf-8&OutSum=5000&SignatureValue=c763ec577f87c5074c7a524394389d29"
                                          target="_self"
                                          data-action="external"
                                          className="ui-link"
                                        >
                                          <span
                                            style={{
                                              color: "rgb(69,69,69)",
                                              fontSize: "24px",
                                            }}
                                          >
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              ОПЛАТИТЬ
                                            </span>
                                          </span>
                                        </a>
                                      </span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div id="payment-form"></div>

                              <div className="w-btns-group w-btns-group--center w-btns-group--lg-left">
                                <ul className="w-btns-group__inner">
                                  <li className="w-btns-group__item">
                                    <ScrollLink
                                      spy={true}
                                      smooth={true}
                                      offset={50}
                                      duration={500}
                                      to="myScrollToElement"
                                      className="button_2W3 button--left-icon_15k w-button ui-button ui-button--secondary-light ui-button--size-md button--with-icon_3MG button--font-weight-bold_1Nu hover-botton"
                                    >
                                      <span className="button__border_1J- ui-button__border" />
                                      <span className="button__inner_2of">
                                        <span
                                          className="button__icon_286 button__icon--left_17Q"
                                          aria-hidden="true"
                                        >
                                          <span
                                            className="iconElement_3D2 ui-icon_2oI w-icon"
                                            style={{ color: "inherit" }}
                                          >
                                            <span className="iconElement__inner_2iN">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                version="1.1"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 32 32"
                                                enableBackground="new 0 0 32 32"
                                                xmlSpace="preserve"
                                                style={{ maxWidth: "100%" }}
                                                height="100%"
                                              >
                                                <g
                                                  style={{}}
                                                  fill="currentColor"
                                                >
                                                  <g
                                                    style={{}}
                                                    fill="currentColor"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M28.3,24.3h-3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h3c0.4,0,0.8,0.3,0.8,0.8S28.7,24.3,28.3,24.3z"
                                                      style={{}}
                                                    />
                                                  </g>
                                                  <g
                                                    style={{}}
                                                    fill="currentColor"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M28.3,15.6h-3c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h3c0.4,0,0.8,0.3,0.8,0.8S28.7,15.6,28.3,15.6z"
                                                      style={{}}
                                                    />
                                                  </g>
                                                  <g
                                                    style={{}}
                                                    fill="currentColor"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M28.3,19.9h-3c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8h3c0.4,0,0.8,0.3,0.8,0.8    C29.1,19.6,28.7,19.9,28.3,19.9z"
                                                      style={{}}
                                                    />
                                                  </g>
                                                  <g
                                                    style={{}}
                                                    fill="currentColor"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M28.3,28.7h-4.8c-3.3,0-6.7-0.3-10-0.9l-5.3-0.9V11.5l1.5-0.3c1.5-0.3,2.8-1.2,3.5-2.6l2.6-5.2    c0.5-1.1,1.6-1.7,2.8-1.7c0.7,0,1.4,0.2,2,0.7c1.2,0.9,1.5,2.6,0.8,3.9l-1.7,3.4c1.3,0,2.5,0,3.7,0h4.8c1.4,0,2.7,1,2.9,2.3    c0.2,0.9,0,1.8-0.6,2.5c-0.1,0.1-0.2,0.2-0.3,0.3c0.6,0.5,1,1.3,1,2.2c0,0.9-0.4,1.6-1,2.2c0.6,0.5,1,1.3,1,2.2    c0,0.9-0.4,1.6-1,2.2c0.1,0.1,0.2,0.2,0.3,0.3c0.6,0.7,0.8,1.6,0.6,2.5C30.9,27.7,29.7,28.7,28.3,28.7z M9.6,25.6l4,0.7    c3.2,0.6,6.5,0.8,9.7,0.8h4.8c0.7,0,1.3-0.5,1.5-1.1c0.1-0.4,0-0.9-0.3-1.2c-0.3-0.3-0.7-0.5-1.1-0.5v-1.5c0.8,0,1.4-0.6,1.4-1.4    c0-0.8-0.6-1.4-1.4-1.4v-1.5c0.8,0,1.4-0.6,1.4-1.4c0-0.8-0.6-1.4-1.4-1.4v-1.5c0.4,0,0.8-0.2,1.1-0.5c0.3-0.3,0.4-0.8,0.3-1.2    c-0.1-0.7-0.7-1.1-1.5-1.1h-4.8c-1.2,0-2.4,0-3.6,0.1l-0.1,0c-0.5,0-1-0.3-1.3-0.7c-0.3-0.5-0.3-1-0.1-1.5l1.7-3.4    c0.4-0.7,0.2-1.6-0.4-2.1c-0.8-0.6-2.1-0.4-2.5,0.5l-2.6,5.2c-0.9,1.8-2.6,3.1-4.6,3.4l-0.3,0.1V25.6z"
                                                      style={{}}
                                                    />
                                                  </g>
                                                  <g
                                                    style={{}}
                                                    fill="currentColor"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M6.4,30.3H4c-1.8,0-3.2-1.4-3.2-3.2V11.3c0-1.8,1.4-3.2,3.2-3.2h2.5c1.8,0,3.2,1.4,3.2,3.2v15.8    C9.6,28.9,8.2,30.3,6.4,30.3z M4,9.6c-0.9,0-1.7,0.8-1.7,1.7v15.8C2.3,28,3,28.8,4,28.8h2.5c0.9,0,1.7-0.8,1.7-1.7V11.3    c0-0.9-0.8-1.7-1.7-1.7H4z"
                                                      style={{}}
                                                    />
                                                  </g>
                                                </g>
                                              </svg>
                                            </span>
                                          </span>
                                        </span>
                                        <span className="button__content_1_I">
                                          забронировать
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
          </div>
        </section>
      </div>
    </div>
  );
}
