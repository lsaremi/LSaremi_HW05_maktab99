"use strict";
let people1 = [
  {
    name: "ali",
    age: 30,
  },
  {
    name: "sara",
    age: 20,
  },
  {
    name: "reza",
    age: 45,
  },
  {
    name: "samira",
    age: 24,
  },
  {
    name: "shahriar",
    age: 9,
  },
  {
    name: "nazanin",
    age: 8,
  },
];

//  first aproach
function sortByAge(people) {
  console.log(people.sort((a, b) => a.age - b.age));
}
sortByAge(people1);

//  seconds aproach
function sortPeopleByAge(people) {
  function compareByAge(a, b) {
    return a.age - b.age;
  }

  const sortedPeople = [...people];
  sortedPeople.sort(compareByAge);
  return sortedPeople;
}

console.log(sortPeopleByAge(people1));
