//function to remove all punctuation from a string, except apostrophes
const removePunctuation = (str) => {
  const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
  return str.replace(regex, "");
}

//Function takes in a string and returns an obj conatining the unique words, word lengths, and number of occurences
 const wordMap = (str) => {
  //An object that will hold every unique word from a given string, with the word length and number of occurences
  const wordObj = {};
  //Remove all punctuation from a string, turn all the characeters lowecase, and then turn the string into an array of strings
  const cleanStr  = removePunctuation(str).toLowerCase().split(" ");
  // Loop through the string array and add each unique word to the word obj. For duplicated words we add to the count
  for(let word of cleanStr){
    if(word.length && !wordObj[word]){
      wordObj[word] = { "length" : word.length,"count" : 1 };
    } else if(word.length && wordObj[word]){
      wordObj[word]["count"]++;
    }
  }
  return wordObj;
}

const wordCount = (obj) =>{
  let count = 0;
  for(let key in obj){
    count += obj[key]["count"];
  }
  return count;
}

//returns the total length of all strings combined (no spaces)
const totalLength = (obj) => {
  let result = 0;
  for(let key in obj){
    result += (obj[key]["count"] * obj[key]["length"])
  }
  return result;
}

const avgWordLength = (str) => {
  const words = wordMap(str);
  let count = wordCount(words);
  let length  = totalLength(words);
  return (length/count).toFixed(2);
}

console.log(avgWordLength("A Republican Wyoming state senator who's running against US Rep. Liz Cheney for her House seat told a local newspaper he impregnated a 14-year-old girl when he was 18-years-old after he referenced the incident during a Facebook Live stream."));

// export {wordMap}