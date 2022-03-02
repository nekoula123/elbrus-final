import React from "react";
import "./MapComponents.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export default function MapComponent() {
  return (
    <div className="map_container">
      <div className="map_holder">
        <YMaps>
          <Map
            height="100%"
            width="100%"
            defaultState={{ center: [43.2492, 42.631482], zoom: 16 }}
          >
            <Placemark geometry={[43.2492, 42.631482]} />
          </Map>
        </YMaps>
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
