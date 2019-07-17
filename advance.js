//ARROW FUNCTION
//They are more like in line functions
//Example

let numbers = [1, 2, 3, 4, 5];

const square = x => {
  return x * x;
};

//if we have no parameters we can write function as

const withOutParm = () => {
  return 1;
};

//If are function only returns the value we can use

const returnOnlyOne = () => 1;

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = square(numbers[i]);
}

console.log(numbers);

//Arrow function also don't rebind "this" key word.

//------------------------------------------------------------------------------------------------->

//DESTRUCTING
//Concept of allocating properties and values to variables.

let [a, b, c] = numbers;

console.log(a);
//Few values can be skiped as well

let [x] = numbers;
console.log(x);

//Array can be extracted as well for assignment

let [head, ...tail] = numbers;
console.log(tail);

//---------------------------------------------------------------------------------------------------------->

//Complex examples of this invovles working with complex objects in structure.
let complex = {
  first: 1,
  second: {
    third: 3,
    third_second: 3.2
  }
};
//The property names need to be mentioned inorder to destruct
let { first: first_part, second: middle_part } = complex;

console.log(middle_part);
//-------------------------------------------------------------------------------------------------------------->
//Another example is to use it with functions
function forDestructing([first, second]) {
  console.log(first);
}

forDestructing([1, 2]);

//-------------------------------------------------------------------------------------------------------------->
//CLASSES
//constrcutor function
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
//constructor only called with "new" keyword
console.log(new Person("Yahya", 23).name);

//Can perform inheritence
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}

//^ Export key word is added to export any function,class to other files.
//Can be aggregated in this form

export default { Person, Employee };

//default is for non named exports.

//-------------------------------------------------------------------------------------------------------------->

//ARRAY MAP
const colors = ["red", "green", "blue"];

items = colors.map((color, index) => {
  return "<li>" + color + index + "</li>";
});

//using template literals
let items_template = colors.map((color, index) => {
  return `<li>${color}</li>`;
});

//-------------------------------------------------------------------------------------------------------------->
//spread operator is to help with task similar to concatination
//Operator on the array
const first = [1, 2, 3];
const first_second = [2, 3, 4];

let combined = [...first, ...first_second];
console.log(combined);

//this operator works on the objects as well
let ram = {
  capacity: 2
};
let processor = {
  clock: 2.3
};
let computer = { ...ram, ...processor };
console.log(computer);
