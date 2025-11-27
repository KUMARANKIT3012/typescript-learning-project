let a: number;

// mujhe number nahi sankhya chahiye
// then i can use type aliases

type Sankhya = number;
let b: Sankhya;


// then some may think ki ye kuch khaas fayda nahi de raha hai

// wait till you see this example :
type value =  string | number | null; // union type
let c: value;
c = 12;
c = "hello";
c = null;

// lets use this in function : 
type args = string | number;
function abcd(obj: args) {
}
abcd(123);
abcd("hello");
// abcd(true); // error