import React, { useState, useEffect } from "react";
import { editData, getRoom } from "../../api/fetchData";
import { useParams, useNavigate } from "react-router-dom";
export default function EditPriceForm() {
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();
  const token = localStorage.getItem("token");
  const authToken = localStorage.getItem("authToken");
  const handleEditForm = () => {
    const data = {
      price: {
        old: oldPrice,
        new: newPrice,
      },
    };
    editData({ id }, data).then((result) => {
      if (result && result.modifiedCount > 0) {
        setMsg("данные успешно изменены!");
        setTimeout(() => setMsg(""), 2000);
      }
    });
  };

  useEffect(() => {
    !token && !authToken && navigate("/");
    getRoom({ id }).then((result) => {
      setOldPrice(result.price.old);
      setNewPrice(result.price.new);
    });
  }, []);

  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      {newPrice || oldPrice ? (
        <div
          id="blockId-5ca5eee671b4680026b20e1f"
          data-block-name="custom-block"
          data-block-categories="custom"
          data-test="block-wrapper"
          data-anchor="Book-form"
          className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background background--dark w-state-has-background"
        >
          <div style={{ display: "none" }} id="Book-form" />
          <div
            className="w-block-background background-wrapper_RZ2"
            aria-hidden="true"
            data-background--hide="false"
            data-component="background"
            data-type="image"
            data-hydrate='{"style":[{"media":"(min-width: 1200px) and (max-width: 1920px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1920"},{"media":"(max-width: 768px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1200"},{"media":"(min-width: 768px) and (max-width: 1199px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1920"},{"media":"(min-width: 1921px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_2560"},{"media":"(min-width: 2560px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), only screen and (min-resolution: 144dpi) and (min-width: 1200px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_2560"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1920px), only screen and (min-resolution: 144dpi) and (min-width: 1920px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 2560px), only screen and (min-resolution: 144dpi) and (min-width: 2560px)","background":"no-repeat 50% 44.73% / cover","url":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_5120"}],"mediaImageBackground":true,"backgroundClassName":"background_2xT","isParallax":false,"filterStyle":{},"fallbackurl":"//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized"}'
            data-data-loaded="true"
          >
            <div
              className="background_2xT"
              style={{
                background:
                  'url("//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_3840.webp") 50% 44.73% / cover no-repeat',
              }}
            />
            <div
              className="background-overlay_2z6"
              style={{ background: "rgba(33, 33, 33, 0.95)" }}
            />
          </div>
          <section className="w-section">
            <div className="w-section__inner">
              <div className="w-section__content">
                <div
                  className="w-grid w-grid--row w-grid--gap"
                  data-columns-count={3}
                >
                  <div className="w-grid__inner">
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={3}
                    >
                      <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                        <p
                          className="text_1k0 ui-heading w-heading ui-heading--light"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <br />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={6}
                    >
                      <div
                        style={{ padding: "60px 100px 60px 100px" }}
                        className="w-grid__item-inner w-grid__item-panel w-text-center w-card w-f268ff1915872c764995ff9f282acdd5 background_3lr background background--dark w-state-has-background"
                      >
                        <div
                          className="background-wrapper_RZ2"
                          aria-hidden="true"
                          data-background--hide="false"
                          data-component="background"
                          data-type="color"
                          data-data-loaded="true"
                        >
                          <div
                            className="background_2xT"
                            style={{ background: "#212121" }}
                            data-role="placeholder"
                          />
                        </div>
                        <p
                          className="text_1k0 ui-heading w-heading ui-heading--light"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <span className="w-text-content">
                              изменить информацию о номерах!
                            </span>
                          </span>
                        </p>
                        <div data-app="contact-form">
                          <div
                            className="w-form ui-contact-form ui-contact-form--dark"
                            id="form-null"
                          >
                            <div className="w-form__field">
                              <div
                                style={{
                                  textAlign: "center",
                                  color: "green",
                                  height: "30px",
                                }}
                              >
                                {msg}
                              </div>
                              <label>Цена до скидки</label>
                              <input
                                onChange={(e) => setOldPrice(e.target.value)}
                                type="text"
                                id="5ca5eee671b4680026b20e1f-contactForm_name"
                                className="w-form__input ui-input ui-input--size-md"
                                required
                                value={oldPrice}
                                style={{
                                  borderColor: "#ff527f",
                                  backgroundColor: "rgba(255, 255, 255, 0.24)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <label>Цена после скидки</label>
                              <input
                                type="text"
                                onChange={(e) => setNewPrice(e.target.value)}
                                id="5ca5eee671b4680026b20e1f-contactForm_name"
                                className="w-form__input ui-input ui-input--size-md"
                                required
                                value={newPrice}
                                style={{
                                  borderColor: "#ff527f",
                                  backgroundColor: "rgba(255, 255, 255, 0.24)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <input
                              type="text"
                              autoComplete="off"
                              className="honey-field"
                              defaultValue
                            />
                            <button
                              onClick={handleEditForm}
                              className="w-form-button w-form__button w-form-button--left-icon ui-button ui-button--secondary-dark ui-button--size-md w-form-button--font-weight-bold"
                            >
                              <span className="w-form-button__border ui-button__border hover-botton-form" />
                              <span className="w-form-button__content hover-botton-child">
                                <span className="w-form-button__inner">
                                  <span className="w-form-button__text">
                                    подтвердить изменение
                                  </span>
                                  <span
                                    className="w-form-button__icon w-form-button__icon--left"
                                    data-role="icon"
                                    aria-hidden="true"
                                  >
                                    <span
                                      className="iconElement_3D2 ui-icon_2oI w-icon ui-icon--light_HAb"
                                      style={{ color: "inherit" }}
                                    >
                                      <span className="iconElement__inner_2iN">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          viewBox="0 0 90 90"
                                          enableBackground="new 0 0 90 90"
                                          xmlSpace="preserve"
                                          style={{ maxWidth: "100%" }}
                                          height="100%"
                                        >
                                          <g style={{}} fill="currentColor">
                                            <path
                                              d="M78.3,66L66.6,44.4c1.2-2.7,1.9-5.7,1.9-8.9c0-12.1-9.8-22-22-22c-12.1,0-22,9.8-22,22c0,3.2,0.7,6.3,1.9,9L14.7,66   c-0.4,0.7-0.3,1.5,0.2,2.2c0.5,0.6,1.3,0.9,2,0.7l10-2.3l3.4,9.6c0.3,0.7,0.9,1.3,1.7,1.3c0.1,0,0.1,0,0.1,0c0.7,0,1.4-0.4,1.8-1.1   l10.2-19.1c0.7,0.1,1.5,0.1,2.2,0.1c0.7,0,1.4,0,2.1-0.1L59,76.5c0.4,0.6,1,1,1.8,1c0.1,0,0.1,0,0.2,0c0.8-0.1,1.5-0.6,1.7-1.3   l3.4-9.6l10,2.3c0.8,0.2,1.6-0.1,2-0.7C78.6,67.5,78.7,66.7,78.3,66z M32.6,70.6l-2.5-7c-0.3-1-1.3-1.5-2.3-1.3L20.3,64l8.5-15.4   c2.8,3.8,6.7,6.6,11.3,8L32.6,70.6z M28.5,35.5c0-9.9,8.1-18,18-18c9.9,0,18,8.1,18,18c0,9.9-8.1,18-18,18   C36.6,53.5,28.5,45.4,28.5,35.5z M65.2,62.3c-1-0.2-2,0.3-2.3,1.3l-2.5,7.1l-7.7-14c4.7-1.4,8.8-4.3,11.6-8.2L72.7,64L65.2,62.3z"
                                              style={{}}
                                              fill="currentColor"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={3}
                    >
                      <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                        <p
                          className="text_1k0 ui-heading w-heading ui-heading--light"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <br />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
