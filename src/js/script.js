let breed = document.getElementsByClassName("breed")[0];

breed.innerHTML = 'Dog breed:';

class Animal {

    constructor(self) {
        this.self = self;
    }

    getData() {
        axios
            .get('./animal.json')
            .then(respons => {
                // this.self = respons.data;
                // console.log(this.self);

                if(dog.self === 'Dog') {
                    this.self = respons.data.dog;
                    console.log(this.self);
                } else if (cat.self === 'Cat') {
                    this.self = respons.data.cat;
                    console.log(this.self);
                }
            })
    }

    
}

class Dog extends Animal {
    constructor(self) {
        super(self)
    }

}

class Cat extends Animal {
    constructor(self) {
        super(self)
    }
}

let dog = new Dog('Dog');
let cat = new Cat('Cat');

dog.getData();
cat.getData();


