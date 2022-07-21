const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => { //this line declares function with arrow notation
 return tutorials.map((tutorial) => { //here we are mapping tutorial and starting function of how we want to map it 
    const titles = tutorial.split(" "); //for each element of tutorial(the titles), its splitting up each title into its own array
    const capTitles = titles.map((wordArray) => { //so now we are mapping through the split words in the titles

      return wordArray[0].toUpperCase() + wordArray.substring(1) //this is capitalizing the first letter in each word and putting the rest of the letters in each word with it
    }).join(" "); //this join those words back up into sentences. it keeps mapping through all the elements until it is finished
    // console.log(capTitles)
    return capTitles;
  });
  // const foo = tutorials.map(x => x.toLowerCase());
  // console.log(words)
  // console.log(newWords)
}

// const titleCased = () => {
//   return tutorials.map((tutorial) => {
//     const titlesByWord = tutorial.split(" ");
//     const capTitles = titlesByWord.map((wordInArray) => {
//       return wordInArray[0].toUpperCase() + wordInArray.substring(1)
//     }).join(" ")
//     return capTitles
//   })
// }
titleCased()