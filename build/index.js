"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// let characters = new CharactersCollection("salam");
// characters.sort();
// console.log(characters);
// let numbers = new NumbersCollection([12, 45, 1, 234, -12]);
// numbers.sort();
// console.log(numbers);
let list = new LinkedList_1.LinkedList();
list.add(19);
list.add(-2);
list.add(12);
list.sort();
console.log(list.print());
