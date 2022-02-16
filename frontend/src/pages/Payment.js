import React from "react";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import ReservationFormAccommodation from "../components/PaymentUI/ReservationFormAccommodation";

export default function Payment({ token, setToken }) {
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
        title="Оплата"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfb856655df00231edc7a_optimized_3840.webp"
      />
      <ReservationFormAccommodation />
    </React.Fragment>
  );
}
