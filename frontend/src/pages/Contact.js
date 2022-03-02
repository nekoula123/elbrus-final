import React from "react";
import "./Contact.css";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import ContactUs from "../components/ContactUI/ContactUs";
import CompanyDetails from "../components/ContactUI/CompanyDetails";
import MapComponent from "../components/ContactUI/MapComponent";
export default function Contact({ token, setToken }) {
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
        title="Контакты"
        image="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1920.webp"
      />
      <ContactUs />
      <MapComponent />
      <CompanyDetails />
    </React.Fragment>
  );
}
