class Person {
    constructor(firstName, lastName, age, email) {
        this.age = age;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.toString();

    }
    toString() {
        console.log(`${this.firstName}${this.lastName}(age:${this.age} Email:${this.email})`);
    }
}
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person);