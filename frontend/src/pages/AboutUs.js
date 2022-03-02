import React from "react";
import "./About.css";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import HotelPhotos from "../components/AboutUsUI/HotelPhotos";
import GalleryAboutUs from "../components/AboutUsUI/GalleryAboutUs";
import ContactUs from "../components/AboutUsUI/ContactUs";
export default function AboutUs({ token, setToken }) {
  return (
    <React.Fragment>
      <div
        id="portal"
        className="g-sticky-wrapper sticky-wrapper_6A4"
        style={{ height: "0px" }}
      ></div>
      <div
        className="w-blocks-group-wrapper blocks-group-wrapper_2QF"
        data-legacy="true"
        style={{}}
        data-hydrated="true"
      >
        <Header1 token={token} setToken={setToken} />
      </div>

      <LowerHeader
        title="Немного об Отеле"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized"
      />
      <HotelPhotos />
      <GalleryAboutUs />
      <ContactUs />
    </React.Fragment>
  );
}
