// Getter and Setter in TypeScript
// we dont need this that much in our usecase 

class User{
    constructor(public name : string, private age: number){}

        getName(){
            return this.name;
        }

        setName(value : string){
            this.name = value;
        }
}

let u1 = new User("ankit", 29);

// abhi mujhe method call karna pad raha hai get and set ke liye 


// but ts tells us that we can use get and set keyword to make it more simple
class User2{
    constructor(public _name : string, private age: number){}

    get Name(){
        return this._name;
    }

    set Name(value : string){
        this._name = value;
    }
}
let u2 = new User2("ank", 25);