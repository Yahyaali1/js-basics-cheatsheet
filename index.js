// Normal statements end with ";"

// Declaring a variable using "let"

let x = 1;

//Log can be performed using 
console.log(x);

//----------------------------------------------------------------------------------------------------------------------------------------------------
//BASIC PERMITIVE DATA TYPES

//int,boolean,string,undefined,null

//int 
let integer = 1;
console.log(integer);

//boolean 
let amHuman = true;
console.log(amHuman);

//string can be declared using single or double quotes
let myName = "Yahya";
let myFriendName = 'John';
console.log(myName+' and my friend\'s name is '+myFriendName);

//Any variable that value will remain same throughout the program can be declared using const.
const nameOfHome = "Earth"

console.log(nameOfHome);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//undeclared variables has "undefiend value" and type 
let myFutureBestFriend; 
console.log(myFutureBestFriend);

//"null" can be used to replace value within the variable 

myName=null;
console.log(myName);
//null value can be replaced again with value 
myName= "Yahya";
console.log(myName);
//--------------------------------------------------------------------------------------------------------------------------------------------->
//Notes
//All the variables have dynamic types. For example if the variables has integer value this can be reassigned to string as well
//without having a error. 

console.log('Type of myName'+typeof(myName));
myName = 1;

console.log('MyName type has changed');
console.log(typeof(myName));

//--------------------------------------------------------------------------------------------------------------------------------------------->

//REFERENCE TYPE

//Other data type is Java script is "object" type
//we can define custom object or reference type. 

let person = {
    name : 'YAHYA',
    age: 23
};
console.log(person)
//Allows the properties to be accessed by "." or using brackets 
console.log('Person Name \n');
console.log(person.name);
//using brackets
console.log(person['name']);

//using brackets allows to cover the use case such as we can select property on run time 
//EXAMPLE

let selection = 'name'

console.log(person[selection]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//Arrays are also part of object type 
//We can access properties of arrays using the "."

let integerToFive = [1,2,3,4,5];
console.log(integerToFive);

//individual elements can be accessed using brackets

console.log(integerToFive[1]);
//Other properties
console.log(integerToFive.length);

//Arrays can contain dynamic binding as well, furthermore they can extend dynamically as well 

integerToFive[5]=6;
console.log(integerToFive[5]);

integerToFive[0] = "Ali"

console.log(integerToFive[0]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//Function can be declared using the prototype below 

function sayMyName(name){
    console.log('Hello '+name);

}

sayMyName(myFriendName);

//if parameter value is not assigned it will still fun normally. As the parameter will have undefined value

sayMyName();

//--------------------------------------------------------------------------------------------------------------------------------------------->

