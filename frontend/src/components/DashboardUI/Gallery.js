import React from "react";
import { Link } from "react-router-dom";
export default function Gallery() {
  const images = [
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d66414ab173b600244b724a_optimized_1396_c1396x930-0x0.webp",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6640355deb29002379927d_optimized_1479_c1396x930-41x55.webp",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6641005deb29002379943e_optimized_1396_c1396x931-0x0.webp",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1600_c1600x700-0x0.webp",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1395_c1395x930-0x0.webp",
    "//res2.weblium.site/res/5d6521c1b173b6002449a088/5d663b9b5deb290023798066_optimized_1395_c1395x930-0x0.webp",
  ];

  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5cab7bd78637a800259a2740"
        data-block-name="blank-custom-block-collection"
        data-block-categories="other"
        data-test="block-wrapper"
        data-anchor="other-1"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div style={{ display: "none" }} id="other-1" />
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
            style={{ background: "rgb(247, 247, 247)" }}
            data-role="placeholder"
          />
        </div>
        <section className="w-section">
          <div className="w-section__inner">
            <header className="w-section__header">
              <div
                className="w-grid w-grid--row w-grid--gap"
                data-columns-count={1}
              >
                <div className="w-grid__inner">
                  <div className="w-grid__item w-grid__item--top">
                    <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                      <p
                        className="text_1k0 ui-headingLg w-heading-lg"
                        data-component="text"
                      >
                        <span
                          style={{ display: "block", textAlign: "center" }}
                          className="w-text-block w-text-center "
                        >
                          <span className="w-text-content">ГАЛЕРЕЯ</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="w-section__content">
              <div
                data-columns-count={3}
                data-columns-inner-size="false"
                data-component="collection"
                data-collection-mode="collection"
                className="collection w-979020caf2437bb4c9a9594c7482f3ba w-grid w-grid--collection w-grid--gap w-grid--left"
                data-items-count={6}
              >
                <div className="w-grid__inner">
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className="w-grid__item w-grid__item--top w-text-center"
                    >
                      <div className="w-grid__item-inner w-088754deb0dd8820b733e12d9894218e w-grid__item-panel">
                        <div className="w-picture-wrapper media-wrapper_3VN">
                          <picture
                            className="w-picture ui-picture_2i5"
                            style={{ paddingTop: "72.43%" }}
                            data-component="picture"
                            data-images="[]"
                            data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d66414ab173b600244b724a_optimized_1396_c1396x930-0x0"
                            data-was-processed="true"
                            data-loaded="true"
                          >
                            <img
                              alt="Illustration"
                              data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d66414ab173b600244b724a_optimized_1396_c1396x930-0x0"
                              className="w-picture__image ui-image_3aJ"
                              style={{
                                objectFit: "cover",
                                objectPosition: "45.647% 50%",
                                fontFamily: "object-fit: cover",
                              }}
                              src={image}
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <footer className="w-section__footer">
              <div
                className="w-grid w-grid--row w-grid--gap"
                data-columns-count={1}
              >
                <div className="w-grid__inner">
                  <div className="w-grid__item w-grid__item--top">
                    <div className="w-grid__item-inner w-grid__item-panel w-text-center w-088754deb0dd8820b733e12d9894218e">
                      <div className="w-btns-group">
                        <div className="w-btns-group__inner ">
                          <Link
                            data-component="button"
                            className="w-btns-group__item button_2W3 w-button ui-button ui-button--secondary-alt-light ui-button--size-lg button--font-weight-bold_1Nu"
                            to="/gallery"
                          >
                            <span className="button__border_1J- ui-button__border hover-red-background" />
                            <span className="button__inner_2of">
                              <span className="button__content_1_I">
                                ГАЛЕРЕЯ
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
}
