import React from "react";

export default function AlertDone({ open, setOpen }) {
  const closeAlert = () => {
    setOpen(false);
  };

  return (
    <div className={!open ? "hideAlert w-block-wrapper" : "w-block-wrapper"}>
      <div className="w-form-modal w-form-modal--dark">
        <div
          className="w-form-modal__overlay"
          data-message-content="w-form-modal__overlay"
        />
        <div
          className="w-form-modal__content w-form-modal__content--entering"
          data-message-content="w-form-modal__content"
        >
          <article className="w-form-message">
            <button
              type="button"
              className="w-form-message__close-btn"
              data-test="close-modal-btn"
              data-role="close"
              onClick={closeAlert}
            />
            <section className="w-form-message__content">
              <span
                className="w-form-message__status-ico"
                role="img"
                aria-label="message ok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 32">
                  <g>
                    <path d="M18.32 32c-1.51 0-2.93-.62-3.997-1.746-.43-.455-.43-1.19 0-1.645.43-.455 1.128-.455 1.558 0 .653.686 1.52 1.065 2.44 1.065.92 0 1.787-.38 2.438-1.066l19.03-20.077c.652-.687 1.01-1.6 1.01-2.572 0-.97-.358-1.885-1.01-2.572-1.344-1.418-3.532-1.418-4.876 0L24.31 14.573c-.43.454-1.13.454-1.56 0-.43-.454-.43-1.19 0-1.644L33.354 1.743c2.204-2.325 5.79-2.325 7.994 0 2.204 2.325 2.204 6.108 0 8.433l-19.03 20.077C21.25 31.38 19.83 32 18.32 32z" />
                    <path
                      fillOpacity=".359"
                      d="M24 26.134l-3.295 3.44c-1.82 1.9-4.77 1.9-6.59 0L2.365 17.307c-1.82-1.9-1.82-4.98 0-6.88 1.82-1.9 4.77-1.9 6.59 0L24 26.133z"
                    />
                    <path d="M18.053 32c-1.592 0-3.088-.645-4.214-1.817L1.742 17.59c-2.324-2.42-2.324-6.354 0-8.773C2.868 7.645 4.365 7 5.957 7c1.592 0 3.088.645 4.213 1.817L25.66 24.94c.453.473.453 1.24 0 1.712l-3.393 3.53C21.142 31.356 19.645 32 18.053 32zM5.957 9.42c-.97 0-1.884.393-2.57 1.108-1.42 1.475-1.42 3.876 0 5.352l12.096 12.592c.686.715 1.6 1.11 2.57 1.11.97 0 1.884-.395 2.57-1.11l2.572-2.676L8.527 10.528c-.686-.715-1.6-1.11-2.57-1.11z" />
                  </g>
                </svg>
              </span>
              <p
                className="w-form-message__title text_1k0 ui-text w-body ui-text--light"
                data-component="text"
              >
                <span className="w-text-block" style={{ display: "block" }}>
                  <span className="w-text-content">Спасибо!</span>
                </span>
              </p>
              <p
                className="w-form-message__text text_1k0 ui-text w-body ui-text--light"
                data-component="text"
              >
                <span className="w-text-block" style={{ display: "block" }}>
                  <span className="w-text-content">
                    Мы скоро с Вами свяжемся.
                  </span>
                </span>
              </p>
              <button
                onClick={closeAlert}
                type="button"
                className="w-form-message__btn"
                data-test="modal-btn"
                data-role="close"
              >
                <span
                  className="w-form-message__inner-text text_1k0 ui-text w-body ui-text--light"
                  data-component="text"
                >
                  <span className="w-text-block" style={{ display: "block" }}>
                    <span className="w-text-content">Ok</span>
                  </span>
                </span>
              </button>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
