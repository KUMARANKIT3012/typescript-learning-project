// Rest Parameters - Allows a function to accept an indefinite number of arguments as an array.


function abcd(...args : number[]){ // rest parameter
    console.log(args);
}
abcd(1, 2, 3, 4, 5, 56,45,41,54); // valid call




// jaise maine number type ka rest parameter liya hai, waise hi string type ka bhi le sakte hain



function efgh(...args : string[]){ // rest parameter
    console.log(args);
}       
efgh("ankit", "harsh", "rohan"); // valid call