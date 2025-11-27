// Generic functions

function efgh<T>(b: T, c: number, d: boolean){

}
efgh<string>("ankit", 123, true);
efgh<number>(456, 789, false);
efgh<boolean>(true, 101, true);
efgh<Array<string>>(["a", "b", "c"], 202, false);
efgh<{name: string, age: number}>({name: "ankit", age: 25}, 303, true);


// example 3:
function ijkl<T, U>(e: T, f: U){

}   
ijkl<string, number>("harsh", 123);
ijkl<boolean, Array<string>>(true, ["x", "y", "z"]);
ijkl<{name: string}, boolean>({name: "ankit"}, false);



// NOte - call kate waqt tyoe spcify karna optional hai
function log<T>(val : T){
    console.log(val);
}
log("Hello World");
log(12345);
log(true);
log(["a", "b", "c"]);
log({name: "ankit", age: 25});
