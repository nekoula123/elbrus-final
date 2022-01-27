import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function RoomView() {
  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5ca5ec1a71b4680026b20aee"
        data-block-name="custom-block"
        data-block-categories="custom"
        data-test="block-wrapper"
        data-anchor="perfect-vacation"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background background--dark w-state-has-background"
      >
        <div style={{ display: "none" }} id="perfect-vacation" />
        <div
          className="w-block-background background-wrapper_RZ2"
          aria-hidden="true"
          data-background--hide="false"
          data-component="background"
          data-type="image"
          data-hydrate='{"style":[{"media":"(min-width: 1200px) and (max-width: 1920px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_1920"},{"media":"(max-width: 768px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_1200"},{"media":"(min-width: 768px) and (max-width: 1199px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_1920"},{"media":"(min-width: 1921px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_2560"},{"media":"(min-width: 2560px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), only screen and (min-resolution: 144dpi) and (min-width: 1200px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_2560"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1920px), only screen and (min-resolution: 144dpi) and (min-width: 1920px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_3840"},{"media":"only screen and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 2560px), only screen and (min-resolution: 144dpi) and (min-width: 2560px)","background":"fixed no-repeat 50% 50% / cover","url":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_5120"}],"mediaImageBackground":true,"backgroundClassName":"background_2xT background--fixed_3Wb","isParallax":false,"filterStyle":{},"fallbackurl":"//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized"}'
          data-data-loaded="true"
        >
          <div
            className="background_2xT background--fixed_3Wb"
            style={{
              background:
                'url("//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bc98efad659002343112d_optimized_1920.webp") 50% 50% / cover no-repeat fixed',
            }}
          />
          <div
            className="background-overlay_2z6"
            style={{ background: "rgba(33, 33, 33, 0.94)" }}
          />
        </div>
        <section className="w-section">
          <div className="w-section__inner">
            <div className="w-section__content">
              <div
                className="w-grid w-grid--row w-grid--gap"
                data-columns-count={1}
              >
                <div className="w-grid__inner">
                  <div className="w-grid__item w-grid__item--top">
                    <div className="w-grid__item-inner w-grid__item-panel w-text-center w-088754deb0dd8820b733e12d9894218e">
                      <p
                        className="text_1k0 ui-headingLg w-heading-lg ui-headingLg--light"
                        data-component="text"
                      >
                        <span
                          style={{ display: "block" }}
                          className="w-text-block "
                        >
                          <span className="w-text-content">
                            Забронируйте роскошное жилье и наслаждайтесь&nbsp;
                          </span>
                        </span>
                        <span
                          style={{ display: "block" }}
                          className="w-text-block "
                        >
                          <span className="w-text-content">
                            прекрасным отдыхом!
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
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
                        <div className="w-btns-group__inner">
                          <ScrollLink
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                            to="myScrollToElement"
                            className="w-btns-group__item button_2W3 w-button ui-button ui-button--primary-dark ui-button--size-lg"
                          >
                            <span className="button__border_1J- ui-button__border" />
                            <span className="button__inner_2of">
                              <span className="button__content_1_I">
                                СМОТРЕТЬ НОМЕРА
                              </span>
                            </span>
                          </ScrollLink>
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
