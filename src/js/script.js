let breed = document.getElementsByClassName("breed")[0];

breed.innerHTML = 'Dog breed:';

class Animal {

    constructor(self = {}) {
        this.self = {
            dog: {},
            cat: {}
        };
    }

    getData() {
        axios
            .get('./animal.json')
            .then(respons => {
                // console.log(respons.data.dog);
                this.self = respons.data;  
                console.log(this.self)
            })
    }

    
}

class Dog extends Animal {
    constructor(self = {}) {
        super(self)
    }
}

class Cat extends Animal {
    constructor(self = {}) {
        super(self)
    }
}

let dog = new Dog();

let cat = new Cat();

let animal = new Animal();

animal.getData();

