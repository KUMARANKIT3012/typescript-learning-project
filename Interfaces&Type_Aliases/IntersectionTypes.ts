// Union and Intersection Types
// •Union types
// •Intersection types



// Union Types : when a variable can hold multiple types
let unionVar: number | string; // can be number or string
unionVar = 10;
unionVar = "hello";
// unionVar = true; // error




// Intersection Types : It should satisfy all the types
type User = {
    name : string,
    email : string,
}

type Admin = User & {
    getDetails(user: string):void
}

function abcde(a: Admin){
    a.email;
    a.name;
    a.getDetails("ankit");
}