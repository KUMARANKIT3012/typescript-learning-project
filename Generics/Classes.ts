// Generic classes

class Bottlemaker<T>{
    constructor(public color : string, public volume : number, public content : T){
    }
}

new Bottlemaker<string>("red", 500, "water");
new Bottlemaker<number>("blue", 1000, 250);
new Bottlemaker<boolean>("green", 750, true);
new Bottlemaker<Array<string>>("yellow", 600, ["a", "b", "c"]);
new Bottlemaker<{name: string, age: number}>("black", 1200, {name: "ankit", age: 21});