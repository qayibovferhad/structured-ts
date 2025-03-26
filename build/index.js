"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const Sorter_1 = require("./Sorter");
const charactersCollection = new CharactersCollection_1.CharactersCollection("Zgdfha");
const sorter = new Sorter_1.Sorter(charactersCollection);
console.log(charactersCollection.data);
sorter.sort();
console.log(charactersCollection.data);
