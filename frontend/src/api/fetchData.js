export const fetchData = async () => {
  const result = await fetch("https://elbrusplaza.com/rooms/", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const editData = async ({ id }, data) => {
  const result = await fetch(`https://elbrusplaza.com/rooms/edit/${id}`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const getRoom = async ({ id }) => {
  const result = await fetch(`https://elbrusplaza.com/rooms/get/${id}`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const loginSubmit = async ({ email, password }) => {
  const result = await fetch("https://elbrusplaza.com/user/login", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const sendEmail = async ({ name, phone, email, text }) => {
  const result = await fetch("https://elbrusplaza.com/mail/", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      phone: phone,
      email: email,
      msg: text,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};

export const reserveRoom = async ({ id }, data) => {
  const result = await fetch(`https://elbrusplaza.com/rooms/pay/${id}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
  return result;
};
