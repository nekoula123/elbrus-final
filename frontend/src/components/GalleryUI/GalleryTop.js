import React from "react";

export default function GalleryTop({ title, img1, img2, img3 }) {
  const images = [img1, img2, img3];
  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5cab847d8637a800259a2aee"
        data-block-name="blank-custom-block-collection"
        data-block-categories="other"
        data-test="block-wrapper"
        data-anchor="General"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div style={{ display: "none" }} id="General" />
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
                        className="text_1k0 ui-blockTitle w-title"
                        data-component="text"
                      >
                        <span
                          style={{ display: "block", textAlign: "center" }}
                          className="w-text-block w-text-center "
                        >
                          <span className="w-text-content">{title}</span>
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
                data-items-count={3}
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
                            style={{ paddingTop: "62.43%" }}
                            data-component="picture"
                            data-images="[]"
                            data-fallbackurl="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized"
                            data-was-processed="true"
                            data-loaded="true"
                          >
                            <img
                              alt="Illustration"
                              data-fallback-url="//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized"
                              className="w-picture__image ui-image_3aJ"
                              style={{
                                objectFit: "cover",
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
          </div>
        </section>
      </div>
    </div>
  );
}
