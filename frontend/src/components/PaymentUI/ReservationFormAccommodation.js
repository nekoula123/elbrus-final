import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import AlertDone from "../UI/AlertDone";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { editData, getRoom, reserveRoom } from "../../api/fetchData";
import { useParams } from "react-router-dom";
export default function ReservationFormAccommodation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [room, setRoom] = useState("");
  const [reservedRooms, setReservedRooms] = useState([]);
  const { id } = useParams();
  function getDates(startDate, stopDate) {
    if (!stopDate) {
      stopDate = startDate;
    }
    let dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    return dateArray;
  }

  const handleEditForm = () => {
    if (!name || !phone || !email || !startDate) {
      setMsg("пожалуйста заполните все поля");
      setTimeout(() => setMsg(""), 3000);
    } else {
      const newDates = getDates(startDate, endDate);
      let filteredNewDays = newDates.filter(
        (day) =>
          !reservedRooms.find((item) => {
            return item.getTime() == day.getTime();
          })
      );
      let today = new Date();
      let yesterday = today.setDate(today.getDate() - 1);
      let reservedUntilToday = room.reserved
        ? room.reserved.filter((day) => new Date(day).getTime() >= yesterday)
        : [];
      const helper = [filteredNewDays, ...reservedUntilToday].flat();
      const backendDates = helper.map((date) => date.toString());
      const data = {
        reserved: backendDates,
      };
      editData({ id }, data).then((result) => {
        if (result && result.modifiedCount > 0) {
          const nodejsDate = newDates.map((date) => date.toString());
          const roomType = room.type;
          const userData = { name, phone, email, nodejsDate, roomType };
          reserveRoom({ id }, userData).then((result) => {
            window.location.replace(result.confirmation.confirmation_url);
          });
        }
      });
    }
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    handleEditForm();
  };

  const calculateReservedRooms = (room) => {
    let reservedDays = [];
    const dates = room.reserved;
    let uniqueValues = [...new Set(dates)];
    for (let day of uniqueValues) {
      let helper = dates.filter((date) => date === day);
      if (helper.length >= room.numberOfRooms) {
        reservedDays.push(new Date(day));
      }
    }
    return reservedDays;
  };

  useEffect(() => {
    getRoom({ id }).then((result) => {
      setReservedRooms(calculateReservedRooms(result));
      setRoom(result);
    });
  }, [id]);

  return (
    <React.Fragment>
      <div className="w-blocks-group-wrapper blocks-group-wrapper_2QF">
        <Element
          name="myScrollToElement"
          id="blockId-5cbec852292c62002498232a"
          data-block-name="custom-block"
          data-block-categories="custom"
          data-test="block-wrapper"
          data-anchor="Book-form"
          className="block-wrapper w-block-wrapper block-wrapper_3Um background_3lr background background--dark w-state-has-background"
        >
          <div style={{ display: "none" }} id="Book-form" />
          <div
            className="w-block-background background-wrapper_RZ2"
            aria-hidden="true"
            data-background--hide="false"
            data-component="background"
            data-type="image"
            data-data-loaded="true"
          >
            <div
              className="background_2xT"
              style={{
                background:
                  'url("//res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized_1920.webp") 50% 44.73% / cover no-repeat',
              }}
            />
            <div
              className="background-overlay_2z6"
              style={{ background: "rgba(33, 33, 33, 0.95)" }}
            />
          </div>
          <section className="w-section">
            <div className="w-section__inner">
              <div className="w-section__content">
                <div
                  className="w-grid w-grid--row w-grid--gap"
                  data-columns-count={3}
                >
                  <div className="w-grid__inner">
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={3}
                    >
                      <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                        <p
                          className="text_1k0 ui-heading w-heading ui-heading--light"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <br />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={6}
                    >
                      <div
                        style={{ padding: "60px 100px 60px 100px" }}
                        className="w-grid__item-inner w-grid__item-panel w-text-center w-card w-f268ff1915872c764995ff9f282acdd5 background_3lr background w-state-has-background"
                      >
                        <div
                          className="background-wrapper_RZ2"
                          aria-hidden="true"
                          data-background--hide="false"
                          data-component="background"
                          data-type="color"
                          data-data-loaded="true"
                        >
                          <div
                            className="background_2xT"
                            style={{ background: "#fff" }}
                            data-role="placeholder"
                          />
                        </div>
                        <p
                          className="text_1k0 ui-blockTitle w-title"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <span className="w-text-content">
                              Забронируйте роскошное жилье и наслаждайтесь
                              прекрасным отдыхом!
                            </span>
                          </span>
                        </p>
                        <div data-app="contact-form" data-rendered="true">
                          <form
                            className="w-form ui-contact-form ui-contact-form--light"
                            id="form-null"
                          >
                            <div className="w-form__field">
                              <div
                                style={{
                                  textAlign: "center",
                                  color: "#db2655",
                                  height: "30px",
                                }}
                              >
                                {msg}
                              </div>
                              <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="5cbec852292c62002498232a-contactForm_name"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите свое полное имя*"
                                value={name}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <input
                                type="tel"
                                onChange={(e) => setPhone(e.target.value)}
                                id="5cbec852292c62002498232a-contactForm_phoneNumber"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите свой номер телефона*"
                                value={phone}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                id="5cbec852292c62002498232a-contactForm_email"
                                className="w-form__input ui-input ui-input--size-md"
                                placeholder="Введите адрес электронной почты*"
                                value={email}
                                required
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                maxLength={2000}
                              />
                            </div>
                            <div className="w-form__field">
                              <DatePicker
                                id="5cbec852292c62002498232a-25448f1a-2c67-4213-851c-ae066b916af5"
                                style={{
                                  borderColor: "#b01f45",
                                  backgroundColor: "rgba(33, 33, 33, 0.12)",
                                }}
                                className="w-form__input ui-input ui-input--size-md date-input-style"
                                selectsRange={true}
                                startDate={startDate}
                                endDate={endDate}
                                excludeDates={reservedRooms}
                                onChange={(update) => {
                                  setDateRange(update);
                                }}
                                isClearable={true}
                                placeholderText="Выберите дату въезда и выезда*"
                              />
                            </div>
                            <div className="cashBackButton">
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                  marginTop: "20px",
                                }}
                                href="#paymentcheck"
                              >
                                &darr; получи кэшбэк 20% &darr;
                              </a>
                            </div>
                            <button
                              style={{ marginTop: "40px" }}
                              onClick={SubmitForm}
                              className="w-form-button w-form__button ui-button ui-button--primary-light ui-button--size-md w-form-button--font-weight-bold"
                            >
                              <span className="w-form-button__border ui-button__border" />
                              <span className="w-form-button__content">
                                <span className="w-form-button__inner">
                                  <span className="w-form-button__text">
                                    Перейти к оплате
                                  </span>
                                </span>
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-grid__item w-grid__item--top"
                      data-column-size={3}
                    >
                      <div className="w-grid__item-inner w-grid__item-panel w-text-left w-088754deb0dd8820b733e12d9894218e">
                        <p
                          className="text_1k0 ui-heading w-heading ui-heading--light"
                          data-component="text"
                        >
                          <span
                            className="w-text-block"
                            style={{ display: "block" }}
                          >
                            <br />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
      </div>

      <AlertDone open={open} setOpen={setOpen} />
      <div className="cashbackContainer" id="paymentcheck">
        <div
          className="left-cashback"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#616161",
          }}
        >
          <div
            style={{
              padding: "30px 40px 10px 40px",
              color: "#fff",
            }}
          >
            <p>
              <strong>
                <span style={{ fontFamily: "Montserrat,sans-serif" }}>
                  Условия программы «Туристический кешбэк» в целях&nbsp;
                  стимулирования&nbsp; внутреннего туризма:
                </span>
              </strong>
            </p>
            <ul
              style={{
                listStyle: "square",
                margin: "1em 0px 1em",
                padding: "0px 0px 0px 1.5em",
                maxHeight: "999999px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "14px",
              }}
            >
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Период действия Программы:&nbsp;
                    <strong style={{ maxHeight: "999999px" }}>
                      18 января 0:01– 12 апреля 23:59 2022&nbsp;
                    </strong>
                  </span>
                  <strong style={{ maxHeight: "999999px" }}>
                    <span
                      style={{
                        maxHeight: "999999px",
                        fontFamily: "Montserrat,sans-serif",
                      }}
                    >
                      года.
                    </span>
                  </strong>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    В этот&nbsp;&nbsp;период необходимо оплатить поездку картой
                    «Мир».
                  </span>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <div style={{ maxHeight: "999999px" }}>
                  <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                    <span
                      style={{
                        maxHeight: "999999px",
                        fontFamily: "Montserrat,sans-serif",
                      }}
                    >
                      Сроки самого путешествия : с&nbsp;
                      <strong style={{ maxHeight: "999999px" }}>
                        18 января по 30 апреля 2022 года
                      </strong>
                      .&nbsp; Для морских/речных или железнодорожных круизов
                      с&nbsp;
                      <strong style={{ maxHeight: "999999px" }}>
                        18 января по 1 июня 2022 года
                      </strong>
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            <p>
              <strong>
                <span style={{ fontFamily: "Montserrat,sans-serif" }}>
                  Условия начисления кешбэка:
                </span>
              </strong>
            </p>
            <ul
              style={{
                listStyle: "circle",
                margin: "1em 0px 1em",
                padding: "0px 0px 0px 1.5em",
                maxHeight: "999999px",
                fontFamily: "Montserrat,sans-serif",
                fontSize: "14px",
              }}
            >
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Зарегистрируйте вашу карту «Мир» банка-участника в Программе
                    лояльности для держателей карт «Мир» или проверьте, что
                    карта уже зарегистрирована
                  </span>
                </span>
              </li>

              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Выбрать тур по России от 2-х ночей с 18 января 0:01– 30
                    апреля 23:59 2022 года ;
                  </span>
                </span>
              </li>

              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    С 00:01 мск 18 января по 23:59 12 апреля оплатите полную
                    стоимость поездки на сайте. Кешбэк в размере 20% от суммы
                    бронирования, но не более 20 000 рублей за одну бронь;
                  </span>
                </span>
              </li>

              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Получить возврат (кешбэк) в срок до 5 рабочих дней с момента
                    оплаты;
                  </span>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Условия начисления возврата: размер возврата денежных
                    средств на карту составит 20% от стоимости тура, но не более
                    20000 рублей за одну транзакцию;
                  </span>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Количество операций по одной карте не ограничено, можете
                    получить кешбэк несколько раз;
                  </span>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Минимальная стоимость тура не ограничена;
                  </span>
                </span>
              </li>
              <li
                style={{
                  maxHeight: "999999px",
                  marginTop: "0.15em",
                  marginRight: "0px",
                  marginBottom: "0.15em",
                  paddingBottom: "0.1em",
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "15px",
                }}
              >
                <span style={{ maxHeight: "999999px", fontSize: "10pt" }}>
                  <span
                    style={{
                      maxHeight: "999999px",
                      fontFamily: "Montserrat,sans-serif",
                    }}
                  >
                    Территория проведения программы - Российсская Федерация.{" "}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ paddingTop: "40px" }} className="cashback">
          <iframe
            style={{
              padding: "0px !important",
              backgroundColor: "#fff",
              color: "#fff",
            }}
            title="elbrus_payment"
            width="100%"
            height="500px"
            src="https://privetmir.ru/register/"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
