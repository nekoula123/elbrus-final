import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Header1({ token, setToken }) {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
  };

  return (
    <div
      id="blockId-5b30d54ccf38370024d16a6b"
      data-block-name="wireframe-series-13-header"
      data-block-categories="header"
      data-test="block-wrapper"
      data-anchor="header-1"
      data-legacy="true"
      data-sticky="true"
      className="block-wrapper w-block-wrapper block-wrapper_3Um undefined background_3lr background background--dark w-state-has-background"
    >
      <div id="header-1" style={{ display: "none" }} />
      <div
        className="w-block-background background-wrapper_RZ2"
        aria-hidden="true"
        data-background--hide="false"
      >
        <div
          className="background_2xT"
          data-role="placeholder"
          style={{
            background:
              "linear-gradient(0deg, rgb(255, 121, 156) 0%, rgb(219, 38, 85) 100%)",
          }}
        />
      </div>
      <header
        className={
          !open
            ? "header__124EX w-section w-section--header w-section--no-v-padding"
            : "header__124EX header--opened__BG9CE w-section w-section--header w-section--no-v-padding"
        }
        data-header="target"
        data-category="header"
      >
        <div className="header__top-line__30JWL background_3lr background background--dark w-state-has-background">
          <div
            className="background-wrapper_RZ2"
            aria-hidden="true"
            data-background--hide="false"
          >
            <div
              className="background_2xT"
              data-role="placeholder"
              style={{ background: "rgb(33, 33, 33)" }}
            />
          </div>
          <div className="top-line__1n4MJ w-layout w-layout--gap w-content-container">
            <div className="top-line__inner__W7rOp w-layout__inner w-disable-offset">
              <p
                className="top-line__text__1qVa4 top-line__item__2rY5- w-layout__item w-text-center w-text-md-left text_1k0 ui-caption w-caption ui-caption--light zoom-in-top_mBq normal_2Pr"
                style={{ lineHeight: "1.3" }}
              >
                <span
                  style={{ display: "block" }}
                  className="w-text-block phone-header"
                >
                  <span className="w-text-content">
                    <span style={{ fontWeight: "bold" }}>
                      <u>+7 (928) 076-79-07</u>
                    </span>
                  </span>
                </span>
                <span
                  style={{ display: "block" }}
                  className="w-text-block phone-header"
                >
                  <span className="w-text-content">
                    <span style={{ fontWeight: "bold" }}>
                      <u>+7 (926) 412-11-20</u>
                    </span>
                  </span>
                </span>
              </p>
              {!token ? (
                <Link
                  to="/login"
                  className="zoom-in-top_mBq slow_3YD loginButton"
                >
                  ЛОГИН
                </Link>
              ) : (
                <div
                  onClick={handleLogout}
                  className="zoom-in-top_mBq slow_3YD loginButton"
                >
                  ВЫЙТИ
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="header__inner-wrapper__1ZEO5">
          <div className="header__inner__lLh6b w-section__inner">
            <button
              onClick={openNav}
              type="button"
              className="nav-button__3zwfU w-burger w-hide--lg w-hide--xl"
              data-header="trigger"
              title="Switch menu"
            >
              <span className="w-burger__inner">
                <span className="w-burger__line" aria-hidden="true" />
                <span className="w-burger__line" aria-hidden="true" />
                <span className="w-burger__line" aria-hidden="true" />
              </span>
            </button>
            <div className="logo-container__21pc5">
              <div className="logo-wrapper__3NqM2 w-logo w-text-center w-text-lg-left">
                <Link className="logo__3RS8m w-logo__content" to="/">
                  <p
                    className="ui-logo_EOm ui-logo--desktop_Gdr ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                    style={{
                      lineHeight: "1.4375",
                      fontSize: "32px",
                      fontFamily: "Comfortaa, cursive",
                    }}
                  >
                    <span className="w-text-block" style={{ display: "block" }}>
                      <span className="w-text-content">ELBRUS PLAZA</span>
                    </span>
                  </p>
                  <p
                    className="ui-logo_EOm ui-logo--mobile_hfa ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light"
                    style={{
                      lineHeight: "1.4375",
                      fontSize: "26px",
                      fontFamily: "Comfortaa, cursive",
                    }}
                  >
                    <span className="w-text-block" style={{ display: "block" }}>
                      <span className="w-text-content">ELBRUS PLAZA</span>
                    </span>
                  </p>
                </Link>
                <span className="w-logo__slogan text_1k0 ui-subtitle w-subtitle ui-subtitle--light zoom-in-top_mBq normal_2Pr">
                  <span className="w-text-block" style={{ display: "block" }}>
                    <span className="w-text-content">Природа и воздух</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="wrapper__SZVPx w-hide--sm w-hide--md">
              <nav className="nav__1Tbbs w-nav">
                <ul className="menu_1QC menu--5b30d54ccf38370024d16a6b--menu nav-list__2HXfD w-nav__list zoom-in-top_mBq normal_2Pr">
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link className="menu__link_2K2 w-nav__link" to="/about">
                        О наc
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/accommodation"
                      >
                        Номера
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/services-facilities"
                      >
                        Сервис
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/gallery"
                      >
                        Галерея
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/contacts"
                      >
                        Контакты
                      </Link>
                    </span>
                  </li>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".menu--5b30d54ccf38370024d16a6b--menu .menu__link_2K2:not(.submenu__link) {font-weight: 500;letter-spacing: calc(0.1 * 1em);} .menu--5b30d54ccf38370024d16a6b--menu .menu__item_1eM:not(.submenu__link) {font-size: 18px;}",
                    }}
                  />
                </ul>
              </nav>
              <div className="btns-group-wrapper__vGatM w-hide--sm w-hide--md">
                <div className="btns-group__1Cu1E w-btns-group w-btns-group--center">
                  <ul className="btns-group__inner__26cWJ w-btns-group__inner">
                    <li className="btns-group__item__2obn2 w-btns-group__item">
                      <Link
                        className="zoom-in-top_mBq slow_3YD button_2W3 w-button ui-button ui-button--primary-dark ui-button--size-md button--font-weight-bold_1Nu"
                        to="/#blockId-5ca5eee671b4680026b20e1f"
                      >
                        <span className="button__border_1J- ui-button__border" />
                        <span className="button__inner_2of">
                          <span className="button__content_1_I">
                            ЗАБРОНИРОВАТЬ
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header--mobile__1Fx-K w-hide--lg w-hide--xl">
          <div className="header__top-line__30JWL background_3lr background background--dark w-state-has-background">
            <div
              className="background-wrapper_RZ2"
              aria-hidden="true"
              data-background--hide="false"
            >
              <div
                className="background_2xT"
                data-role="placeholder"
                style={{ background: "rgb(33, 33, 33)" }}
              />
            </div>
            <div className="top-line__1n4MJ w-layout w-layout--gap w-content-container">
              <div className="top-line__inner__W7rOp w-layout__inner w-disable-offset">
                <p
                  className="top-line__text__1qVa4 top-line__item__2rY5- w-layout__item w-text-center w-text-md-left text_1k0 ui-caption w-caption ui-caption--light zoom-in-top_mBq normal_2Pr"
                  style={{ lineHeight: "1.3" }}
                >
                  <span style={{ display: "block" }} className="w-text-block ">
                    <span className="w-text-content">
                      <span style={{ fontWeight: "bold" }}>
                        <u>+7 (928) 076-79-07</u>
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block" }} className="w-text-block ">
                    <span className="w-text-content">
                      <span style={{ fontWeight: "bold" }}>
                        <u>+7 (926) 412-11-20</u>
                      </span>
                    </span>
                  </span>
                </p>
                <div className="socials-wrapper__31h-g top-line__item__2rY5- w-layout__item w-hide--sm"></div>
              </div>
            </div>
          </div>

          <div className="fix-background__3_Fzu background_3lr background background--dark w-state-has-background">
            <div
              className="background-wrapper_RZ2"
              aria-hidden="true"
              data-background--hide="false"
            >
              <div
                className="background_2xT"
                data-role="placeholder"
                style={{
                  background:
                    "linear-gradient(0deg, rgb(255, 121, 156) 0%, rgb(219, 38, 85) 100%)",
                }}
              />
            </div>
            <div className="header__inner-wrapper__1ZEO5">
              <div className="header__inner__lLh6b w-section__inner">
                <button
                  onClick={openNav}
                  type="button"
                  className="nav-button__3zwfU w-burger w-burger--active w-hide--lg w-hide--xl"
                  data-header="trigger"
                  title="Switch menu"
                >
                  <span className="w-burger__inner">
                    <span className="w-burger__line" aria-hidden="true" />
                    <span className="w-burger__line" aria-hidden="true" />
                    <span className="w-burger__line" aria-hidden="true" />
                  </span>
                </button>
                <div className="logo-container__21pc5">
                  <div className="logo-wrapper__3NqM2 w-logo w-text-center w-text-lg-left">
                    <Link className="logo__3RS8m w-logo__content" to="/">
                      <p
                        className="ui-logo_EOm ui-logo--desktop_Gdr ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                        style={{
                          lineHeight: "1.4375",
                          fontSize: "32px",
                          fontFamily: "Comfortaa, cursive",
                        }}
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">ELBRUS PLAZA</span>
                        </span>
                      </p>
                      <p
                        className="ui-logo_EOm ui-logo--mobile_hfa ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                        style={{
                          lineHeight: "1.4375",
                          fontSize: "26px",
                          fontFamily: "Comfortaa, cursive",
                        }}
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">ELBRUS PLAZA</span>
                        </span>
                      </p>
                    </Link>

                    <span className="w-logo__slogan text_1k0 ui-subtitle w-subtitle ui-subtitle--light zoom-in-top_mBq normal_2Pr">
                      <span
                        className="w-text-block"
                        style={{ display: "block" }}
                      >
                        <span className="w-text-content">Природа и воздух</span>
                      </span>
                    </span>
                  </div>
                </div>
                <nav className="nav__1Tbbs w-nav w-nav--column">
                  <ul className="menu_1QC menu--5b30d54ccf38370024d16a6b--menu nav-list__2HXfD w-nav__list zoom-in-top_mBq normal_2Pr">
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/about"
                        >
                          О нас
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/accommodation"
                        >
                          Номера
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/services-facilities"
                        >
                          Сервис
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/gallery"
                        >
                          Галерея
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/contacts"
                        >
                          Контакты
                        </Link>
                      </span>
                    </li>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".menu--5b30d54ccf38370024d16a6b--menu .menu__link_2K2:not(.submenu__link) {font-weight: 500;letter-spacing: calc(0.1 * 1em);} .menu--5b30d54ccf38370024d16a6b--menu .menu__item_1eM:not(.submenu__link) {font-size: 18px;}",
                      }}
                    />
                  </ul>
                </nav>
                <div className="socials-wrapper__31h-g w-hide--md"></div>
                <div className="btns-group__1Cu1E w-btns-group w-btns-group--center">
                  <ul className="w-btns-group__inner">
                    <li className="w-btns-group__item">
                      <Link
                        className="zoom-in-top_mBq slow_3YD button_2W3 w-button ui-button ui-button--primary-dark ui-button--size-md button--font-weight-bold_1Nu"
                        data-component="hash-link"
                        to="/#blockId-5ca5eee671b4680026b20e1f"
                        onClick={openNav}
                      >
                        <span className="button__border_1J- ui-button__border" />
                        <span className="button__inner_2of">
                          <span className="button__content_1_I">
                            ЗАБРОНИРОВАТЬ
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
