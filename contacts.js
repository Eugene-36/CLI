//=================================================================

// contacts.js

let fs = require("fs"),
  path = require("path"),
  util = require("util");
let content;
console.log(content);

//  Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код

  const fs = require("fs");

  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const array = JSON.parse(data);
    const res = array.map((el) => el);
    console.table(res);
  });
}

function getContactById(contactId) {
  // ...твой код
  const fs = require("fs");

  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const array = JSON.parse(data);

    var item = array.find((item) => String(item.id) === String(contactId));
    console.log(item);
  });
}

function removeContact(contactId) {
  // ...твой код

  const fs = require("fs");

  fs.readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const array = JSON.parse(data);
    array.forEach(function (el, i) {
      if (el.id == contactId) array.splice(i, 1);
    });
    console.log(array);

    console.log(array);
  });
  console.log("Работате ");
}

function addContact(name, email, phone) {
  // ...твой код

  console.log("Работает");
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  contactsPath,
};
