// Readonly property - we can not change the value of readonly property after initializing it

class User{
    constructor(public readonly name : string){
    }

    changeName(){
        // this.name = "helleow"; // Error: Cannot assign to 'name' because it is a read-only property
    }
}

let u1 = new User("ankit");
// but i want ki name nahi badalna chayea then write readonly before name