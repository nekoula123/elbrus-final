import React, { useState } from "react";
import { Element } from "react-scroll";
import { sendEmail } from "../../api/fetchData";
import AlertDone from "../UI/AlertDone";
export default function ReservationFormAccommodation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const SubmitForm = () => {
    if (name && phone && email) {
      sendEmail({ name, phone, email, text });
      setOpen(true);
    } else {
      console.log("must provide all fields");
    }
    setName("");
    setPhone("");
    setEmail("");
    setText("");
  };
  return (
    <React.Fragment>
      <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
        <Element
          name="myScrollToElement"
          id="blockId-5cbec852292c62002498232a"
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
            data-data-loaded="true"
          >
            <div
              className="background_2xT"
              style={{
                background:
                  'url("//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1920.webp") 50% 44.73% / cover no-repeat',
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
                        className="w-grid__item-inner w-grid__item-panel w-text-center w-card w-f268ff1915872c764995ff9f282acdd5 background_3lr background w-state-has-background"
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
                            style={{ background: "#fff" }}
                            data-role="placeholder"
                          />
                        </div>
                        <p
                          className="text_1k0 ui-blockTitle w-title"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <span className="w-text-content">
                              Забронируйте роскошное жилье и наслаждайтесь
                              прекрасным отдыхом!
                            </span>
                          </span>
                        </p>
                        <div data-app="contact-form" data-rendered="true">
                          <form
                            className="w-form ui-contact-form ui-contact-form--light"
                            id="form-null"
                          >
                            <div className="w-form__field">
                              <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="5cbec852292c62002498232a-contactForm_name"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите свое полное имя*"
                                value={name}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <input
                                type="tel"
                                onChange={(e) => setPhone(e.target.value)}
                                id="5cbec852292c62002498232a-contactForm_phoneNumber"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите свой номер телефона*"
                                value={phone}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="5cbec852292c62002498232a-contactForm_email"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите адрес электронной почты*"
                                value={email}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <textarea
                                onChange={(e) => setText(e.target.value)}
                                id="5cbec852292c62002498232a-25448f1a-2c67-4213-851c-ae066b916af5"
                                placeholder="Введите ваше сообщение"
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                className="w-form__input w-form__input--textarea ui-input ui-input--size-md"
                                maxLength={2000}
                                value={text}
                              />
                            </div>
                            <input
                              type="text"
                              autoComplete="off"
                              className="honey-field"
                              defaultValue
                            />
                            <button
                              onClick={SubmitForm}
                              className="w-form-button w-form__button ui-button ui-button--primary-light ui-button--size-md w-form-button--font-weight-bold"
                            >
                              <span className="w-form-button__border ui-button__border" />
                              <span className="w-form-button__content">
                                <span className="w-form-button__inner">
                                  <span className="w-form-button__text">
                                    ЗАБРОНИРОВАТЬ
                                  </span>
                                </span>
                              </span>
                            </button>
                          </form>
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
        </Element>
      </div>
      <AlertDone open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
