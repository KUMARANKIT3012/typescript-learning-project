// Static Members in TypeScript


class Hero{
    static version  = "1.0"; // static member

    static getRandomNumber(){
        return Math.random();
    }
}

Hero.version; // we can use version and getRandomNumber without creating instance