import React from "react";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import LoginForm from "../components/UI/LoginFrom";
export default function Login({ token, setToken }) {
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
        title="Вход"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfb856655df00231edc7a_optimized_3840.webp"
      />
      <LoginForm token={token} setToken={setToken} />
    </React.Fragment>
  );
}
