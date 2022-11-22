//dynamic object keys
//This enables us to add object keys using square bracket notation. 

const number = 5;
const gavebirth = true;
const weight = 'weight';

//A shorthand form introduced in ES6 using brackets lets us assign the variable in the object literal directly like city
const city = "city";

//While this shorthand form is proffering cleaner code, this scenario applies in multiple cases, where existing data (object) is augmented with data from a different source with a dynamic key.Moving on to computed keys, the value of object keys can be computed directly in the object literal using the same bracket notation in the literal.
const environment = "environment";
const didUserWin = true;

let animal = {
  color : 'brown',
  age: 6,
  'animal-baby' : "pappy",
  [gavebirth && 'babies']: number,
  [weight]: 25,
  [city] : "amreli",
  [environment + (didUserWin ? 'Winner': 'Loser')]: "Assign any value or data here"
};

//Keys and Values in Objects

// Adding a new key - bracket notation
animal["location"] = "house"
// Adding a new key - Dot notation
animal.height = '1.95m'

//Object Keys
const newData = "name";
animal[newData] = "dog"


console.log(animal); 
/* 
age : 6
animal-baby : "pappy"
babies : 5
city : "amreli"
color : "brown"
environmentWinner : "Assign any value or data here"
height : "1.95m"
location : "house"
name : "dog"
weight : 25 
*/


//do notation
console.log(animal.name);  //dog

//These are keys that might not follow the standard naming convention of properties/keys in a object. The standard naming convention only permits camelCase and snake_case, but by using square bracket notation we can solve this problem.
//console.log(animal.animal-baby); // error: ReferenceError: baby is not defined
// bracket notation

  console.log(animal['animal-baby']); //pappy
