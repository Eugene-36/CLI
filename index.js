// import fs from "fs/promises";
// import path from "path";

// let fs = require("fs"),
//   path = require("path"),
//   util = require("util");
// let content;
// console.log(content);

// const contactsPath = fs.readFile(
//   path.join(__dirname, "db", "contacts.json"),
//   "utf8",
//   function (err, data) {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//     content = util.format(data, "test", "test", "test");
//     console.log(content);
//   }
// );
let contactsRediness = require("./contacts");
//===========================

console.log(contactsRediness.listContacts()); // => 'function'
console.log(contactsRediness.getContactById()); // => 'function'
console.log(contactsRediness.removeContact()); // => undefined
console.log(contactsRediness.addContact()); // => undefined
//console.log(contactsRediness);
//JSON.parse(data);
