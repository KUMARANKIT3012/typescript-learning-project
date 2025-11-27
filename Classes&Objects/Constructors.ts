// NOTE - class ko jab bhi tum chalaoge toh constructor sabse pehle chalta hai 
class BottleMaker{
    constructor(public name: string, public price: number){

    }
}

let b1 = new BottleMaker("milton", 2100);



class HumanMaker{
    age  = 0;
    constructor(public name: string, public ishandsome: boolean){

    }
}

let b2 = new HumanMaker("ankit", true);
let b3 = new HumanMaker("harsh", false);



// making one vehicle class : 
class Vehicle{
    public brand;
    public year;
    public model;
    constructor(brand : string, year: number, model: string){
        this.brand = brand;
        this.year = year;
        this.model = model;
    }
}

let car = new Vehicle("audi", 1998, "q8")