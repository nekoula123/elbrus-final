import React from "react";
import Header1 from "../components/header/Header1";
import creditImg from "../assets/creditCard.png";
import sber from "../assets/sber.png";
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
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          margin: "50px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            lineHeight: "30px",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>
            ОПЛАТА С ПОМОЩЬЮ БАНКОВСКОЙ КАРТЫ
          </h1>
          <p>
            Для выбора оплаты товара с помощью банковской карты на
            соответствующей странице сайта необходимо нажать кнопку «Оплата
            банковской картой». Оплата происходит через авторизационный сервер
            Процессингового центра Банка с использованием Банковских кредитных
            карт следующих платежных систем:
          </p>
          <div style={{ fontWeight: "bold" }}>VISA International </div>
          <div style={{ fontWeight: "bold" }}>MasterCard World Wide</div>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            Описание процесса передачи данных
          </h1>
          <p>
            Для оплаты покупки Вы будете перенаправлены на платежный шлюз ПАО
            "Сбербанк России" для ввода реквизитов Вашей карты. Пожалуйста,
            приготовьте Вашу пластиковую карту заранее. Соединение с платежным
            шлюзом и передача информации осуществляется в защищенном режиме с
            использованием протокола шифрования SSL. В случае если Ваш банк
            поддерживает технологию безопасного проведения интернет-платежей
            Verified By Visa или MasterCard Secure Code для проведения платежа
            также может потребоваться ввод специального пароля. Способы и
            возможность получения паролей для совершения интернет-платежей Вы
            можете уточнить в банке, выпустившем карту. Настоящий сайт
            поддерживает 256-битное шифрование. Конфиденциальность сообщаемой
            персональной информации обеспечивается ПАО "Сбербанк России".
            Введенная информация не будет предоставлена третьим лицам за
            исключением случаев, предусмотренных законодательством РФ.
            Проведение платежей по банковским картам осуществляется в строгом
            соответствии с требованиями платежных систем Visa Int. и MasterCard
            Europe Sprl.
          </p>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            Описание процессa оплаты
          </h1>
          <p>
            При выборе формы оплаты с помощью пластиковой карты проведение
            платежа по заказу производится непосредственно после его оформления.
            После завершения оформления заказа в нашем магазине, Вы должны
            будете нажать на кнопку «Оплата банковской картой», при этом система
            переключит Вас на страницу авторизационного сервера, где Вам будет
            предложено ввести данные пластиковой карты, инициировать ее
            авторизацию, после чего вернуться в наш магазин кнопкой "Вернуться в
            магазин". После того, как Вы возвращаетесь в наш магазин, система
            уведомит Вас о результатах авторизации. В случае подтверждения
            авторизации Ваш заказ будет автоматически выполняться в соответствии
            с заданными Вами условиями. В случае отказа в авторизации карты Вы
            сможете повторить процедуру оплаты.
          </p>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            При аннулировании заказа
          </h1>
          <p>
            При аннулировании позиций из оплаченного заказа (или при
            аннулировании заказа целиком) Вы можете заказать другой товар на эту
            сумму, либо вернуть всю сумму на карту предварительно написав письмо
            на e-mail.
          </p>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            Что нужно знать:
          </h1>
          <ul>
            <li>номер вашей кредитной карты</li>
            <li>cрок окончания действия вашей кредитной карты, месяц/год;</li>
            <li>
              CVV код для карт Visa / CVC код для Master Card: 3 последние цифры
              на полосе для подписи на обороте карты.
            </li>
          </ul>
          <img
            style={{ width: "300px", height: "200px" }}
            src={creditImg}
            alt="card"
          />
          <p>
            Если на вашей карте код CVC / CVV отсутствует, то, возможно, карта
            не пригодна для CNP транзакций (т.е. таких транзакций, при которых
            сама карта не присутствует, а используются её реквизиты), и вам
            следует обратиться в банк для получения подробной информации.
          </p>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            ОПЛАТА ЗАКАЗОВ ЧЕРЕЗ СБЕРБАНК
          </h1>
          <img
            style={{ width: "300px", height: "100px" }}
            src={sber}
            alt="card"
          />
          <p>
            Оплата заказов через СБЕРБАНК осуществляется после проверки заказа
            менеджером интернет-магазина. Чтобы оплатить заказ, необходимо
            распечатать квитанцию об оплате с сайта магазина. Предупреждаем Вас,
            что СБЕРБАНК взымает комиссию за услугу оплаты.
          </p>
          <h1 style={{ fontWeight: "bold", marginTop: "30px" }}>
            Отмена заказа
          </h1>
          <p>
            При удалении товаров из оплаченного заказа или при аннулировании
            заказа целиком Вы можете заказать другой товар на такую же сумму,
            либо полностью вернуть всю сумму на карту с помощью Вашего
            менеджера. Доставка и выдача заказа, оплаченного пластиковй картой.
            Доставка или выдача при самовывозе товара, оплаченного пластиковой
            картой, осуществляется со дня зачисления денег на наш счет. Частные
            покупатели для получения товара должны предъявить паспорт владельца
            пластиковой карты, по которой производилась оплата заказа.
            Представитель юридического лица должен иметь доверенность с печатью
            от компании плательщика или саму печать
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
