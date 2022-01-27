import React from "react";
import "./MapComponents.css";

export default function MapComponent() {
  return (
    <div className="map_container">
      <div className="map_holder">
        <iframe
          title="elbrus_map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11624.501139054675!2d42.621750174477306!3d43.24879601538712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405979cfbb87a681%3A0x1a30be61fbf25272!2sElbrusplaza%20Hotel!5e0!3m2!1sen!2sus!4v1642502492104!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
      <div className="title-hotel">
        <div
          className="background-wrapper_RZ2"
          aria-hidden="true"
          data-background--hide="false"
          data-component="background"
          data-type="color"
          data-data-loaded="true"
        ></div>
        <h3
          className="heading__2W2Ox w-text-center w-heading--50 text_1k0 ui-headingLg w-heading-lg"
          data-component="text"
        >
          <span className="w-text-block" style={{ display: "block" }}>
            <span className="w-text-content">Elbrus Plaza</span>
          </span>
        </h3>
        <ul className="contacts-list__3QpvH">
          <li>
            <p
              className="contacts__desc__uA20n w-text-center text_1k0 ui-text w-body"
              data-component="text"
            >
              <span className="w-text-block" style={{ display: "block" }}>
                <span className="w-text-content">
                  <br />
                  Балкарская ул., 36А, село Тегенекли
                </span>
              </span>
            </p>
          </li>
          <li>
            <p
              className="contacts__desc__uA20n w-text-center text_1k0 ui-text w-body"
              data-component="text"
            >
              <span style={{ display: "block" }} className="w-text-block ">
                <span className="w-text-content">
                  <span style={{ fontWeight: "bold" }}>+7 (928) 076-79-07</span>
                </span>
              </span>
              <span style={{ display: "block" }} className="w-text-block ">
                <span className="w-text-content">
                  <span style={{ fontWeight: "bold" }}>+7 (926) 086-86-89</span>
                </span>
              </span>
            </p>
          </li>
          <li>
            <p
              className="contacts__desc__uA20n w-text-center text_1k0 ui-text w-body"
              data-component="text"
              data-replace="true"
            >
              <span className="w-text-block" style={{ display: "block" }}>
                <span className="w-text-content">
                  <span style={{ fontWeight: "bold" }}>
                    elbrusplaza@gmail.com
                  </span>
                </span>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
