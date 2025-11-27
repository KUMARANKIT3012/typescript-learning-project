// Function types


// string return type
/*
function abcd() : string{
    return "ankit bol raha hoon";
}
*/


// kuch bhai nahi return karega 
/*
function efgh() : void{
    console.log("yeh kuch nahi return karega");
}
*/




// callback function types

// example 1
function abcd(name : string, cb: (value: string)=> void){
    cb("heyy");

}
abcd("harsh", (value: string)=>{
    console.log(value);
})

// example 2
function efgh(name: string, age: number, chh: (val: string)=>void){
    chh("callback called");
}

efgh("ankit", 29, (val : string)=>{
    console.log(val);
})