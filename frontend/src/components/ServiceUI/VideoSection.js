import React from "react";

export default function VideoSection() {
  return (
    <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
      <div
        id="blockId-5ca60b3781f08d002587d474"
        data-block-name="custom-block"
        data-block-categories="custom"
        data-test="block-wrapper"
        data-anchor="about"
        className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background w-state-has-background"
      >
        <div style={{ display: "none" }} id="about" />
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
            <div className="w-section__content">
              <div
                className="w-grid w-grid--row w-grid--gap"
                data-columns-count={2}
              >
                <div className="w-grid__inner">
                  <div className="w-grid__item w-grid__item--middle">
                    <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                      <p
                        className="text_1k0 ui-subheading w-subheading"
                        data-component="text"
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">
                            Новый гостиничный комплекс «ELBRUS PLAZA» построен в
                            2018 году и находится в окружении соснового бора
                            национального парка «Приэльбрусье» в живописной
                            Баксанской долине.
                            <br />
                            Это идеальное место, с которого начнется Ваше
                            знакомство со склонами Эльбруса!
                            <br />
                            Номерной фонд отеля рассчитан на 110-120 гостей и
                            представлен номерами категорий «Standart», «Standard
                            Plus», «Panorama», «Luxe», «Семейный»
                            <br />
                            Для корпоративных клиентов предусмотрены специальные
                            предложения и система скидок.
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="w-grid__item w-grid__item--top">
                    <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                      <div className="w-picture-wrapper">
                        <div
                          className="w-picture ui-picture_2i5"
                          style={{ paddingTop: "69.3%" }}
                          data-component="video"
                          data-hydrate='{"uiClassName":"w-picture ui-picture_2i5","resizeStyle":{"paddingTop":"69.3%"},"imgClassName":"w-picture__image","value":{"overlay":{"type":"color","color":"dark-shade-color","opacity":0.56},"url":"https://youtu.be/s7VbsrwQytc","lqip":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAAtADwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQG/8QAIxAAAgIBBQACAwEAAAAAAAAAAAECEVEDEhMhMXGRIkFhgf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARIf/aAAwDAQACEQMRAD8A8yOtOUlaoUaE3BlG8M8BwzwXjOLSaaNsRK5uGeDeGeDosLEK5+GeA4Z4OjtmOST9EK5ANirHem16RW6MLTldd1eC05Km6T29Nr9ktGb05ProbU1XNbWtqJtayLra67StYEm1G/L+CS1El43/AKa5xlX4/bGpjJSb9Jt9lXtatRb+DKhhoqFjKKfg17n0kvlkALRfyk6+xbW7vskBA1/QN4FABlKsUNy/xEwA/9k=","placeholderWidth":60,"placeholderHeight":45}}'
                        >
                          <div className="placeholder-wrapper_1Zc">
                            <div
                              className="w-picture__image player_1sv"
                              style={{
                                top: "0px",
                                left: "0px",
                                opacity: 1,
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  top: "0px",
                                  left: "0px",
                                  opacity: 1,
                                }}
                              >
                                <iframe
                                  frameBorder={0}
                                  allowFullScreen={1}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  title="YouTube video player"
                                  width="100%"
                                  height="100%"
                                  src="https://www.youtube.com/embed/s7VbsrwQytc?autoplay=0&mute=1&controls=1&origin=https%3A%2F%2Felbrusplaza.ru&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0&enablejsapi=1&widgetid=1"
                                  id="widget2"
                                />
                              </div>
                            </div>
                          </div>
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
  );
}
