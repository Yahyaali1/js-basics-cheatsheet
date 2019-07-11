//ARROW FUNCTION 
//They are more like in line functions
//Example

let numbers = [1,2,3,4,5]

const square =(x)=>{return x*x};

for(let i =0; i<numbers.length;i++){
    numbers[i] = square(numbers[i]);
}

console.log(numbers);

//------------------------------------------------------------------------------------------------->

//DESTRUCTING 
//Concept of allocating properties and values to variables. 


let [a,b,c]= numbers;

console.log(a); 
//Few values can be skiped as well 

let [x] = numbers;
console.log(x);

//Array can be extracted as well for assignment 

let[head,...tail]= numbers;
console.log(tail);

//---------------------------------------------------------------------------------------------------------->

//Complex examples of this invovles working with complex objects in structure. 
let complex = {
    first:1,
    second:{
        third:3,
        third_second:3.2
    }
}
//The property names need to be mentioned inorder to destruct 
let {first: first_part,second: middle_part}=complex

console.log(middle_part);
//-------------------------------------------------------------------------------------------------------------->
//Another example is to use it with functions 
function forDestructing([first,second]){
    console.log(first);
}

forDestructing([1,2]);

