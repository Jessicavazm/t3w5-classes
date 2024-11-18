// create a class
class Dog {
    constructor(name, breed, age, color) {
        // initialise the variables, similar to 'self' in Python
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
}

// create instances of the class
let brockie = new Dog('Brockie', 'German Shepard', '1', 'black')

console.log(brockie);
