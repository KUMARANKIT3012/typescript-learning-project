// meaning of abstract class is a class that cannot be instantiated directly


abstract class Shape { // abstract class
    constructor(public color: string) {}

    abstract area(): number; // must be implemented
}


class Circle extends Shape { // concrete class
    constructor(color: string, private radius: number) {
        super(color); // calling the constructor of abstract class
    }

    area(): number { // implementing the abstract method
        return Math.PI * this.radius * this.radius;
    }
}

const c = new Circle("red", 5);
console.log(c.area()); // 78.5398...
