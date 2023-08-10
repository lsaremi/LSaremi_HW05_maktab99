"use strict";
let pedometer = {
  step: 20,
};

function decrease(value) {
  this.step -= value;
  return this;
}

function reset() {
  this.step = 0;
  return this;
}
function increase(value) {
  this.step += value;
  return this;
}

function read() {
  console.log(`steps equal ${this.step}`);
  return this;
}

pedometer.increase = increase;
pedometer.decrease = decrease;
pedometer.reset = reset;
pedometer.read = read;
pedometer.family = "sarei";
console.log("pedometer", pedometer);

pedometer.increase(2).increase(1).increase(2).decrease(2).read();

//  second approach

let pedometer1 = {
  step: 20,
  decrease(value) {
    this.step -= value;
    return this;
  },
  reset() {
    this.step = 0;
    return this;
  },
  increase(value) {
    this.step += value;
    return this;
  },
  read() {
    console.log(`steps equal ${this.step}`);
    return this;
  },
};
pedometer1.increase(2).increase(1).increase(2).decrease(2).read();
