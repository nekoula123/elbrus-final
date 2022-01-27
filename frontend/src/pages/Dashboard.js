import React from "react";
import Cover from "../components/DashboardUI/Cover";
import Information from "../components/DashboardUI/Information";
import Rooms from "../components/DashboardUI/Rooms";
import Services from "../components/DashboardUI/Services";
import OtherServices from "../components/DashboardUI/OtherServices";
import RoomView from "../components/DashboardUI/RoomView";
import Restaurant from "../components/DashboardUI/Restaurant";
import HotelView from "../components/DashboardUI/HotelView";
import Gallery from "../components/DashboardUI/Gallery";
import ReservationForm from "../components/DashboardUI/ReservationForm";
import Header1 from "../components/header/Header1";
import { Outlet } from "react-router-dom";

export default function Dashboard({ token, setToken }) {
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
      <Cover />
      <Information />
      <Rooms />
      <Services />
      <OtherServices />
      <RoomView />
      <Restaurant />
      <HotelView />
      <Gallery />
      <ReservationForm />
      <Outlet />
    </React.Fragment>
  );
}
