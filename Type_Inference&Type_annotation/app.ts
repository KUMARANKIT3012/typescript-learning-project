// Type Inference 
// 1) understanding type inference
// 2) type annotation


// if type is not specified then typescript infers the type based on the value assigned
var a = 12; // inferred as number
var b = "hello"; // inferred as string
var c = true; // inferred as boolean



// type annotation - explicitly specifying the type of a variable
var d: number = 34; // explicitly annotated as number
var e: string = "world"; // explicitly annotated as string
var f: boolean = false; // explicitly annotated as boolean