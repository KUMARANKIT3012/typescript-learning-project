// Type Assertion
//  Type Casting
//  Non-Null Assertion operator

// type assertion ka matlan batana ts ko ki particular variable ka type kya hai, ye aap tab karte ho jab aap ts se zada us variable ke bare me jante ho



// Type assertion : 
let a : any = 12;

// First way
(a as string).length; // type assertion
(a as number).toFixed(); // type assertion


// Second way
(<string>a).length; // type assertion
(<number>a).toFixed(); // type assertion






// Type casting :
let b = Number("123"); // type casting
let c = String(123); // type casting
let d = Boolean(1); // type casting
console.log(typeof b); // number
console.log(typeof c); // string
console.log(typeof d); // boolean




// Non-Null Assertion operator :
// ye operator aapko tab use karna chahiye jab aapko pura bharosa ho ki variable null ya undefined nahi hoga

let e : string | null = "Hello World";
console.log(e!.length); // Non-Null Assertion operator

