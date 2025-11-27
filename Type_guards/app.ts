// Type Guards and TypeScript Utility Types
// Using typeof and instanceof
// Partial, Required, Readonly

// NOTE - type guards -> type narrowing 


// Type Guards using typeof
function abcd(arg: string | number) {
    if (typeof arg === "string") {
        console.log("String value: " + arg.toUpperCase());
    } else {
        console.log("Number value: " + (arg * 2));
    }
}

abcd("hello");
abcd(42);
// but agar . ka use karenge toh wahi function dikhenge jo string and number mein common hai 



// Type Guards using instanceof
class Dog {
    bark() {
        console.log("Woof! Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow! Meow!");
    }
}
function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}