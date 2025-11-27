// Interfaces and Type Aliases
// •Defining interfaces
// •Using interfaces to define object shapes
// •Extending interfaces
// •Type aliases
// •Intersection types



// interface to define the shape of an object : 
interface Person {
    name: string,
    age: number,
    greet: () => void,
    gender?: string; // optional property
}

function introduce(obj: Person) {
}

introduce({name : "ankit", age : 21, greet : () => {console.log("hello")}, gender : "male"});




// extending interfaces :
interface Employee extends Person {
    employeeId: number
} // NOTE -  person mein jo bhi hai wo employee mein bhi hoga plus employeeId bhi hoga

function hire(emp: Employee) {
}

hire({name : "ankit", age : 21, greet : () => {console.log("hello doston")}, employeeId : 1234});



// NOTE : if i make to interfaces with same name then they will merge automatically
