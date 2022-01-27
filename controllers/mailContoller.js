import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nekoulawork@gmail.com",
    pass: "bravo222",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailer = (mailOptions) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err);
    console.log(info);
  });
};

export const formAPI = (req, res) => {
  const { name, phone, email, msg } = req.body;
  const phoneNumber = phone ? phone : "без номера";
  const mailOptions = {
    from: "nekoulawork@gmail.com",
    to: "nekoulahaddad2@gmail.com",
    subject: "elbrus plaza",
    text: `${name} хочет забронировать комнату`,
    html: `<div>
    <b>${name}</b> хочет забронировать комнату</div>
    <br><br/>
    <b>Номер талефона:</b> ${phoneNumber} 
    <br><b>Почта:</b> ${email}<br/>
    <br><br/>
    ${msg}`,
  };
  mailer(mailOptions);
};
