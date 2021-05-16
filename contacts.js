const { v4: uuidv4 } = require("uuid");

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

  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log(data);
    const contacts = JSON.parse(data);
    console.log(contacts);
    const content = { id: uuidv4(), name: name, email: email, phone: phone };
    const newData = [...contacts, content];
    console.log(newData);
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
