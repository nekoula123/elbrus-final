import React from "react";
import Header1 from "../components/header/Header1";
import GalleryTop from "../components/GalleryUI/GalleryTop";
import GalleryCenter from "../components/GalleryUI/GalleryCenter";
import LowerHeader from "../components/UI/LowerHeader";
export default function Gallery({ token, setToken }) {
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
        title="Фотогалерея"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6c050bcca8220023f50877_optimized_2560.webp"
      />
      <GalleryTop
        title="Отель"
        img1="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized.webp"
        img2="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5e8ddad15d00590022acc69e_optimized.webp"
        img3="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5e8ddb4e722ef3002177cc7d_optimized.webp"
      />
      <GalleryCenter />
      <GalleryTop
        title="Ресторан"
        img1="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb9395682db002347c49c_optimized_1396.webp"
        img2="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb928c917a00023a8f5fd_optimized_1396.webp"
        img3="https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6e2d4f69666100237d3603_optimized_1396.webp"
      />
    </React.Fragment>
  );
}
