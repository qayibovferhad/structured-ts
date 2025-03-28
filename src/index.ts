// import { CharactersCollection } from "./CharactersCollection";
// import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

import { LinkedList } from "./LinkedList";

// const charactersCollection = new CharactersCollection("Zgdfha");
// console.log(charactersCollection.data);
// sorter.sort();
// console.log(charactersCollection.data);
const list = new LinkedList();
list.add(50);
list.add(10);
list.add(60);
const sorter = new Sorter(list);

// sorter.sort();

list.print();
