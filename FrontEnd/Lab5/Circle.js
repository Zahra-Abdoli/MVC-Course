class Circle {
    constructor(radius) {
        this.radius = radius;

    }

    get diameter() {
        this.diametter = 2 * this.radius;
        return this.diametter;
    }
    set diameter(diametter) {
        this.diametter = diametter;
        this.radius = this.diametter / 2;
    }
    area() {
        return (3.14 * this.radius * this.radius);
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);