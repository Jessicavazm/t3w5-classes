// create a class
class Dog {
    constructor(name, breed, age, color) {
        // initialise the variables, similar to 'self' in Python
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        // increment the number of dogs every time a new instance is created
        Dog.#numberOfDogs++;
    }
    
    // static variables, variables created inside the class
    static #numberOfDogs = 0;

    static resetDogCount(){
        Dog.#numberOfDogs = 0;
    }

    // setter function to modify private variable
    // static set numberOfDogs(newValue){
    //     return Dog.#numberOfDogs++;
    // }

    // create a method (function), you don't need the function keyword
    // 'this' kw needs to be used to access variable
    bark() {
        // console.log(`Woof! Woof! I am ${this.name}.`)
        console.log(`Woof! Woof! I am ${this.name}.`);
    }
}

// create instances of the class
let bill = new Dog('Bill', 'German Shepard', '1', 'black');

// Access the bark method on object 'Bill' with dot operator
// When you call a function, you need the ()
console.log(bill.bark());


// create unique Error class by inheriting from Error class(JS built in class).
class BarkError extends Error{
    // initialise class with constructor function
    constructor(dogName, dogBreed) {
        // super() is called to use the Error class's properties/methods
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

// call the line bellow to check what parameters you need to pass in the super()
// let newError = new Error()

// try catch block to handle catch errors
try {
    bill.bark();
} catch (error) {
    // throw new BarkError(bill.name, bill.breed);
    if(BarkError){
        console.log("BarkError occurred.");
    }
}

Dog.numberOfDogs =10;
console.log(Dog.numberOfDogs);
