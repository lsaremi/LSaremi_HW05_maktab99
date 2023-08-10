"use strict";

let user = {
  name: "john",
  age: 30,
  sayHello() {
    console.log(`hello ${this.name}`);
  },
};

// function sayHello() {
//   console.log(`hello ${this.name}`);
// }
// user.sayHello = sayHello;

// user.sayHello = function () {
//   console.log(`hello ${this.name}`);
// };

// let user2 = {
//   name: "john",
//   sayHello: () => {
//     console.log(`hello ${user.name}`);
//   },
// };
// user2.sayHello();

user.sayHello();
