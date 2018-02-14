//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = 'Web and Software Developement' ;

//create a number variable, it an be any number
const newNum = 2;

//create a boolean variable
const newBool = true ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  //simply return the string provided: str
  return str;
}

function add(x, y) {
  // x and y are numbers
  // add x and y together and return the value
  let adition = x + y;
  return adition;
}

function subtract(x, y) {
  // subtract y from x and return the value
  let subtraction = x - y;
  return subtraction;
}

function multiply(x, y) {
  // multiply x by y and return the value
  let multiplication = x * y;
  return multiplication;
}

function divide(x, y) {
  // divide x by y and return the value
  let division = x/y;
  return division;
}

function areEqual(x, y) {
  // return true if x and y are the same
  // otherwise return false
  let egalite;
  if(x===y){
    egalite = true;
  }else{
    egalite = false;
  }
  return egalite;
}

function areSameLength(str1, str2) {
  // return true if the two strings have the same length
  // otherwise return false
  let length1 = str1.length;
  let length2 = str2.length;
  let isSame;
  if(length1===length2){
    isSame = true;
  }else{
    isSame = false;
  }
  return isSame;
}

function lessThanNinety(num) {
  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here
  if(num < 90){

    return true;

  }else{

    return false;
  }

}

function greaterThanFifty(num) {
  // return true if num is greater than fifty
  // otherwise return false
  if(num > 50){
    return true;
  }else{
    return false;
  }
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  let reste = x % y;
  return reste;

}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  let reste = num%2;
  if (reste ===0) {
    return true;
  }else{
    return false;
  }
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
   let reste = num%2;
  if (reste !== 0) {
    return true;
  }else{
    return false;
  }

}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  let carre = num * num;
  return carre;
}

function cube(num) {
  // cube num and return the new value
  let carrenum = num * num *num;
  return carrenum;
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  return (Math.pow(num, exponent));
}

function roundNumber(num) {
  // round num and return it
  let arrondi = Math.round(num);
  return arrondi;
}

function roundUp(num) {
  // round num up and return it
  let arrondi = Math.ceil(num);
  return arrondi;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  let addString = str + '!';
  return addString;
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  let helloName = 'Hello' + ' ' + name + '!';
  return helloName;
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  let rectangleArea = length * width;
  return rectangleArea;
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  let triangleArea = (base*height)/2;
  return triangleArea;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
