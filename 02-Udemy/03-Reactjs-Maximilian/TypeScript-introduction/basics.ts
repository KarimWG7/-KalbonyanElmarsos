// primitives: numderr, strings, boolean
// more complex types: arrays, objects
// functions types, parameters

/* primitives */
let age: number = 12.6;
age = 12.1;
//////
let userName: string;
userName = "karim";
//////
let isProgrammer: boolean;
isProgrammer = true;
//////

/* more complex types */
let hobbies: string[];
hobbies = ["Sports", "Food", "Running"];
/////
// type eliases
type Person = {
  name: string;
  age: number;
};
//////
let person: Person;
person = {
  name: "karim",
  age: 19,
};
//////
let people: Person[];
people = [{ name: " mohammed", age: 23 }];
//////

/* Type inference */
let college = "Engineering - Al-Azhar-Univercity";
// we can't do this => college = 11123
//because of type inference which means that type script assigns the type of an variable on its first assign

// we can choose multible types with such a thing called union type

let thing: boolean | string = "karim";
thing = false;

/* functions & types */

// we can assign the type of the returned value of a function
function add(a: number, b: number): number | string {
  return a + b;
}

// when hover the type is void which means never returns and it;s equal to null and undefined
function printOtput(value: any) {
  console.log(value);
}

/* Generics */
// which means that when we use it generate the type of the output according to the inputs
function insertArBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertArBegining(demoArray, 1);
// updatedArray[0].split(' ')  => u can't split a number
const demoArray2 = ["A", "B", "C"];
const updatedArray2 = insertArBegining(demoArray2, "d");
updatedArray2[0].split("");
