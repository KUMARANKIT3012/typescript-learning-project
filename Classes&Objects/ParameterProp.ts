// Parameter properties and optional properties - 



// optional property : 
class User{
    constructor(public name :string, public age: number, public gender?: string){}
}

let u1 = new User("Harsh", 25, "others");
let u2 = new User("Ankit",18);



// parameter property :
class Car{
    constructor(public brand : string, public model : string, public year : number){}
}
let c1 = new Car("Ford", "Mustang", 2020);