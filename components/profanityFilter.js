import { Filter } from "bad-words";
const filter = new Filter({ placeHolder: "*" });
import { array } from "badwords-list";

filter.addWords(...array);

// custom words
const customBadWords = [
  "nigglet",
  "bitchass",
  "niglet",
  "pornstar",
  "cockass",
  "hardass",
  "jackass",
];

filter.addWords(...customBadWords);

export default filter;
