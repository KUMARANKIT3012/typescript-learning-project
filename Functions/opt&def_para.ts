// OPtional and default Parameters



// Optional Parameters - Parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name.
function abcdef(name: string, age : number , gender?: string){
}

abcdef("ankit", 26); // gender is optional
abcdef("ankit", 26, "male"); // gender provided





// Default Parameters - Parameters that have a default value if no value is provided when calling the function.
function ghijkl(name: string, age: number = 18, country: string = "India"){
    console.log(name, age, country);
}

ghijkl("ankit"); // age and country will take default values
ghijkl("ankit", 25); // country will take default value
ghijkl("ankit", 30, "USA"); // no default values used