import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const charactersCollection = new CharactersCollection("Zgdfha");
const sorter = new Sorter(charactersCollection);
console.log(charactersCollection.data);
sorter.sort();
console.log(charactersCollection.data);
