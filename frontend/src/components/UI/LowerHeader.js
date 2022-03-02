import React from "react";

export default function LowerHeader({ title, image }) {
  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5ca6079281f08d002587d0e9"
        data-block-name="custom-block"
        data-block-categories="custom"
        data-test="block-wrapper"
        data-anchor="About-LuxHotel"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background background--dark w-state-has-background"
      >
        <div style={{ display: "none" }} id="About-LuxHotel" />
        <div
          className="w-block-background background-wrapper_RZ2"
          aria-hidden="true"
          data-background--hide="false"
          data-component="background"
          data-type="image"
          data-hydrate='{"style":[{"media":"(min-width: 1200px) and (max-width: 1920px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_1920"},{"media":"(max-width: 768px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_1200"},{"media":"(min-width: 768px) and (max-width: 1199px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_1920"},{"media":"(min-width: 1921px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_2560"},{"media":"(min-width: 2560px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), only screen and (min-resolution: 144dpi) and (min-width: 1200px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_2560"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1920px), only screen and (min-resolution: 144dpi) and (min-width: 1920px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 2560px), only screen and (min-resolution: 144dpi) and (min-width: 2560px)","background":"no-repeat 50.31% 91.95% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized_5120"}],"mediaImageBackground":true,"backgroundClassName":"background_2xT","isParallax":false,"filterStyle":{},"fallbackurl":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized"}'
          data-data-loaded="true"
        >
          <div
            className="background_2xT"
            style={{
              background: `url(${image}) 50.31% 91.95% / cover no-repeat`,
            }}
          />
          <div
            className="background-overlay_2z6"
            style={{ background: "rgba(33, 33, 33, 0.9)" }}
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
                    <div className="w-grid__item-inner w-grid__item-panel w-text-center w-088754deb0dd8820b733e12d9894218e">
                      <h2
                        className="text_1k0 ui-heroTitle w-hero-title ui-heroTitle--light"
                        data-component="text"
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">{title}</span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </section>
      </div>
    </div>
  );
}
