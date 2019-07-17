//var key word allow variables to be accessed outside the block 
//"let" key word restricts variables to a block



//We can add functions to object type as well using this new syntax 
let human= {
    walk(){
        console.log("Take A step");
    },
    name : "",
    walkOld : function(){
        console.log("Old syntax")
    }
}

human.walk()

//"This" called with class returns the reference to the class. 
//"This" called with functions returns reference to a window 
//We can use function properties such as "bind" to bind the reference to the 
//class we want to have. 

//Notes 