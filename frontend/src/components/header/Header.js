import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openHamb = () => {
    setOpen(!open);
  };
  const headerLinks = [
    {
      name: "О нас",
      link: "about",
    },
    {
      name: "Номера",
      link: "accommodation",
    },
    {
      name: "Сервис",
      link: "services-facilities",
    },
    {
      name: "Галерея",
      link: "gallery",
    },
    {
      name: "Контакты",
      link: "contacts",
    },
  ];
  return (
    <div>
      <div className="headerContainer">
        <div className="desktop_header">
          <div className="first_Header">
            <div className="phone_number">+7 (928) 076-79-07</div>
            <div className="phone_number">+7 (926) 412-11-20</div>
          </div>
          <div className="second_header">
            <div className="logo">
              <div className="logo_name">ELBRUS PLAZA</div>
              <div className="logo_description">Природа и воздух</div>
            </div>
            <div className="linksBlock">
              {headerLinks.map((header, i) => (
                <div className="linkContainer">
                  <span className="linkElement" key={i}>
                    {header.name}
                  </span>
                  {header.name !== "Контакты" ? <span>/</span> : null}
                </div>
              ))}
            </div>
            <div className="register_button_container">
              <button className="register_button">забронировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
