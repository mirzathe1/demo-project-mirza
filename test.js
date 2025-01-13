console.log(!!"");
console.log(!!"false");

class Car {
    constructor(model, attributes){
        this.model = model;
        this.attributes= attributes;
    }

    
}

const myCar = new Car("toyota","high Speed");

console.log(myCar.attributes);