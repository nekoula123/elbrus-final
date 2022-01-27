import React, { useState } from "react";
import { sendEmail } from "../../api/fetchData";
import AlertDone from "../UI/AlertDone";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const SubmitForm = () => {
    if (name && text && email) {
      sendEmail({ name, email, text });
      setOpen(true);
    } else {
      console.log("must provide all fields");
    }
    setName("");
    setEmail("");
    setText("");
  };
  return (
    <React.Fragment>
      <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
        <div
          id="blockId-5d808f683185a200267c73ae"
          data-block-name="wireframe-series-12-cta"
          data-block-categories="cta"
          data-test="block-wrapper"
          data-anchor="cta-1"
          className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
        >
          <div style={{ display: "none" }} id="cta-1" />
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
          <section className="w-section w-section w-section--full-width section__2G3Dk">
            <div className="w-section__inner section__inner__3riNn">
              <div className="media__1Zs3Q w-ignore-section-paddings">
                <div className="w-picture-wrapper w-picture-wrapper--absolute media-wrapper_3VN">
                  <picture
                    className="w-picture ui-picture_2i5"
                    data-component="picture"
                    data-images="[]"
                    data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized"
                    data-was-processed="true"
                    data-loaded="true"
                  >
                    <img
                      alt="Img placeholder"
                      data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized"
                      className="w-picture__image ui-image_3aJ"
                      style={{
                        objectFit: "cover",
                        fontFamily: "object-fit: cover",
                      }}
                      src="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized.webp"
                    />
                  </picture>
                </div>
              </div>
              <div className="content__1g82d w-apply-section-paddings">
                <div
                  className="w-grid w-grid--area w-grid--gap w-grid--center"
                  data-columns-inner-size={5}
                >
                  <div className="w-grid__inner">
                    <div className="w-grid__item w-grid__item--top">
                      <div className="w-grid__item-inner w-grid__item-panel w-text-center w-088754deb0dd8820b733e12d9894218e">
                        <h2
                          className="text_1k0 ui-blockTitle w-title"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <span className="w-text-content">Написать нам</span>
                          </span>
                        </h2>
                        <div data-app="contact-form" data-rendered="true">
                          <div
                            className="w-form ui-contact-form ui-contact-form--light"
                            id="form-null"
                          >
                            <div className="w-form__field">
                              <label
                                htmlFor="5d808f683185a200267c73ae-contactForm_name"
                                className="w-form__label"
                              >
                                <span>
                                  Имя
                                  <span
                                    title="Required field"
                                    className="required-mark"
                                  >
                                    *
                                  </span>
                                </span>
                              </label>
                              <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="5d808f683185a200267c73ae-contactForm_name"
                                className="w-form__input ui-input ui-input--size-md"
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
                              <label
                                htmlFor="5d808f683185a200267c73ae-contactForm_email"
                                className="w-form__label"
                              >
                                <span>
                                  Email
                                  <span
                                    title="Required field"
                                    className="required-mark"
                                  >
                                    *
                                  </span>
                                </span>
                              </label>
                              <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="5d808f683185a200267c73ae-contactForm_email"
                                className="w-form__input ui-input ui-input--size-md"
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
                              <label
                                htmlFor="5d808f683185a200267c73ae-243afa0d-d724-4588-82a5-1269d315d24f"
                                className="w-form__label"
                              >
                                <span>Текст</span>
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setText(e.target.value)}
                                id="5d808f683185a200267c73ae-243afa0d-d724-4588-82a5-1269d315d24f"
                                className="w-form__input ui-input ui-input--size-md"
                                value={text}
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <input
                              type="text"
                              autoComplete="off"
                              className="honey-field"
                            />
                            <button
                              onClick={SubmitForm}
                              className="w-form-button w-form__button ui-button ui-button--secondary-light ui-button--size-md w-form-button--font-weight-bold"
                            >
                              <span className="w-form-button__border ui-button__border" />
                              <span className="w-form-button__content">
                                <span className="w-form-button__inner">
                                  <span className="w-form-button__text">
                                    ОТПРАВИТЬ
                                  </span>
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <AlertDone open={open} setOpen={setOpen} />
    </React.Fragment>
  );
}
