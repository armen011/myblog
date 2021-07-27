export function genarateData() {
  return new Date().toISOString().slice(0, 10);
}
export function genarateId(arr) {
  const empty = arr.length === 0 ? true : false;
  if (empty) {
    return 1;
  } else {
    const lastId = parseInt(arr[arr.length - 1].id);
    return lastId + 1;
  }
}

export function getLocalStorage(key) {
  if (localStorage[key]) {
    return JSON.parse(localStorage[key]);
  } else {
    return null;
  }
}
export function setLocalStorage(key, value) {
  localStorage[key] = JSON.stringify(value);
}
export function setSessionStorage(key, value) {
  sessionStorage[key] = JSON.stringify(value);
}
export function getSessionStorage(key) {
  if (sessionStorage[key]) {
    return JSON.parse(sessionStorage[key]);
  } else {
    return null;
  }
}

export function nameCorrect(word) {
  let res = word.split("");
  for (let i = 0; i < res.length; i++) {
    if (i === 0) {
      res[i] = res[i].toUpperCase();
    } else {
      res[i] = res[i].toLowerCase();
    }
  }
  return res.join("");
}
export function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress === "") {
    return "";
  }
  if (!emailAdress.match(regexEmail)) {
    return "not valid email address";
  }
  return "";
}
export function getUserBiId(id) {
  return getLocalStorage("users").filter((elm) => elm.id === id)[0].name;
}
