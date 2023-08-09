"use strict";

let user = {
  name: "john",
  age: 30,
};

function sayHello() {
  console.log(`hello ${this.name}`);
}

//   user.sayHello = function () {
//     console.log(`hello ${this.name}`);
//   };

user.sayHello = sayHello;
user.sayHello();
// let user = {
//   name: "john",
//   sayHello: () => {
//     console.log(`hello ${user.name}`);
//   },
// };

// user.sayHello();
