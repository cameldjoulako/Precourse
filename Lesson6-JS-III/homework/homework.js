// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  let first = arr[0];
  return first;
}

function returnLast(arr) {
  // return the last item of the array
  let lastItem = arr.length-1;
  let last = arr[lastItem];
  return last;

}

function getArrayLength(arr) {
  // return the length of the array
  let arrayLength = arrr.length;
  return arrayLength;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let i=0; i<arr.length; i++){
    arr[i] += 1; 
  }
  return arr;
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let chaine;
  for(let i=0; i<arr.length; i++){
    chaine += arr[i] + ' ';
  }
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  let compt=0
  for (let i=0; i<arr.length; i++){
    if(arr[i] == item){
      compt++;
    }
  }
  if(compt>0){
    retun true;
  }else{
    return false;
  }
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let somme=0;
  for(let i=0; i<numbers.length; i++){
    somme +=numbers[i]; 
  }
  return somme;
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let average = 0;
  let coef = testScores.lenth;
  let somme=0;

  for(let i=0; i<coef; i++){
    somme += testScores[i];
  }

  average = somme/coef;

  return average;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  let largest = numbers[0];
  let tmp = 0;
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]>largest){
      largest = numbers[i];
    }
  }
  return largest;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
};
