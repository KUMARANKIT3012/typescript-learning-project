// Function Overloading in TypeScript allows you to define multiple function signatures for a single function implementation.



// typescript function signature : 
function abcd(a: string): void; // first signature
function abcd(a: string, b: number): number; // second signature


function abcd(a:any, b?:any){
    if(typeof a === 'string' && b === undefined){
        console.log("hey");
    }
    if(typeof a === 'string' && typeof b === 'number'){
        return 123;
    }
    else throw new Error("Invalid arguments");
}

abcd("ankit"); // calls first signature
console.log(abcd("ankit", 25)); // calls second signature
// abcd(25); // Error: Invalid arguments
