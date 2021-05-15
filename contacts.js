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
// function (err, data) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   let content = util.format(JSON.parse(data)); // старый вариант data, "test", "test", "test"
//   console.log(content);

// for (var key in data) {
//   console.log(key.email);
// }

// let jsonContent = JSON.parse(content);
// console.log(jsonContent);

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
    console.log(array);
    const find = array.filter(function (item, i, arr) {
      console.log(item.id === i);
    });
    // var omsk = filterByCity("2");
  });
  // function filterByCity(arr, city) {
  //   return arr.filter(function (item, i, arr) {
  //     return item.city == city;
  //   });
  // }

  // var omsk = filterByCity(myArray, "Омск");

  // console.log(omsk);

  console.log("ту-ту-ту");
}

function removeContact(contactId) {
  // ...твой код
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
