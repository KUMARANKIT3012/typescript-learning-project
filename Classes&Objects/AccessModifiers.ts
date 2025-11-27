// •Access modifiers (public, private, protected)

// class BottleMaker{
//     constructor(private name : string){}
// }

// let b1 = new BottleMaker("milton");
// b1.name = "hulu"
// // private use karne pe galat hai but fir bhi code chal jaega 
// // ts aapke code ko chala toh degi but bata ke chalaegi ki galat hai bhai 



// public : 
/*
class BottleMaker{
    constructor(public name : string){
        this.name = name;
    }

    changing(){
        this.name  = "ankit";
    }
}

let b1 = new BottleMaker("milton")
*/





// Private : 
/*
class BottleMakerPrivate{
    constructor(private name : string){
        this.name = name;
    }
    changing(){
        this.name  = "ankit";
    }
}

let b2 = new BottleMakerPrivate("milton")
b2.changing();
*/





// extends keyword :
/*
class BottleMaker{
    constructor(public name : string){}
}

class MetalBottleMaker extends BottleMaker{
    constructor(name : string){
        super(name);
    }

    getValue(){
        console.log("The name of bottle is " + this.name);
    }
}

let b1 = new MetalBottleMaker("chilton");
b1.getValue();
// NOte - agar name private use karte toh yeh kaam nahi karta
*/






// Protected :
class BottleMaker{
    protected name  = "milton";
}

class MetalBottleMaker extends BottleMaker{
    public material = "metal";

    changename(){
        this.name = "chilton";
    }
}

let b1 = new MetalBottleMaker();
b1.changename();
// NOTE - IN protected we can access the property inside the derived class but if we extend that class then we can use that inside the extended class 
// this was not possible in private
// but if we try to access the protected property outside the class and derived class then it will give error

