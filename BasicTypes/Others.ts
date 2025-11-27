// Any, Unknown, Void, Null, Undefined, Never types


// Any type----> 
let a; 
a = 12;
a = "ankit";
a.toLowerCase(); // no error




// Unknown type ----> 
let b: unknown;
b = 25;
b = "hello";
// b.toLowerCase(); // error will come here
// type narrowing: 
if(typeof b === "string"){
    b.toLowerCase(); // no error
}



// void type ---->
function abcd(): void { // function which does not return anything
    console.log("hey");
}

// returning number 
function xyz(): number {
    return 12;
}

// returning string
function pqr(): string {
    return "hello";
}   




// NULL type ---->
let c: null;
c = null;
// c = 12; // error will come here

// we use union : 
let d: number | null;
d = 12;
d = null; 




// Undefined type ---->
let e: undefined;
e = undefined;
// e = "ankit"; // error will come here




// Never type ----> not that commonly used
function errorFunc(): never {
    throw new Error("This is an error");
}