// Generic interfaces 

interface Halua<T>{
    name : string;
    age : number;
    data : T;
}

function abcd(obj : Halua<string>){}

abcd({name : "ankit", age : 21, data : "this is string data"});