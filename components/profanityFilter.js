var Filter = require("bad-words");
var filter = new Filter();
var badWordList = require("badwords-list");
const badWordListArray = badWordList.array;

filter.addWords(...badWordListArray);

// custom words
var customBadWords = [
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
