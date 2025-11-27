// Generics - kaafi dificult topic hai ye 
//  Generic functions
//  Generic Interfaces
//  Generic Classes


// humme ek function banana hai joki accept karega koi bhi value and usse print karega 
/*
function logger(a: any){
    
}

logger("Hello");
logger(123);
logger(true);
*/


// isse bachne ke liye hum generic functions ka use karte hai

// hum ek function ko use karte waqt bata sakte hain ki function argument ko kis type se treat kare: 

// example 1: 
function abcd<T>(a: T){

}
abcd<string>("harsh");
abcd<number>(123);
abcd<boolean>(true);


// example 2: 
function efgh<T>(b: T, c: number, d: boolean){

}
efgh<string>("ankit", 123, true);
efgh<number>(456, 789, false);
efgh<boolean>(true, 101, true);
efgh<Array<string>>(["a", "b", "c"], 202, false);


// fact and point to be noted : 
// function ijkl<T>(e: T, f: T): T{
//     // return "hey"; // return type bhi T hoga
// }

// ijkl<string>("harsh", "ankit");

"Hey" // this is string literal
123 // this is number literal
true // this is boolean literal