let breed = document.getElementsByClassName("breed")[0],
    weight = document.getElementsByClassName("weight")[0],
    eye_color = document.getElementsByClassName("eye_color")[0],
    life_span = document.getElementsByClassName("life_span")[0],
    voiceSpan = document.getElementsByClassName("voice")[0];

// breed.innerHTML = 'Dog breed:';

class Animal {
    
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    otherData() {
        axios
            .get('./animal.json')
            .then(response => {
                // response.data

                if(dog.type === 'Dog') {
                    this.type = response.data.dog;
                } else if (cat.type === 'Cat') {
                    this.type = response.data.cat;
                    console.log(this.type);
                }
            })
            // .then(({dog}) => {
            //     breed.innerHTML = dog.breed;
            //     weight.innerHTML = dog.weight;
            //     eye_color.innerHTML = dog.eye_color;
            //     life_span.innerHTML = dog.life_span;
            //     voiceSpan.innerHTML = dog.voice[Math.floor(Math.random()*dog.voice.length)];
            // })
    }
    
    // get voice() { 
    //     return this.type.voice[Math.floor(Math.random()*this.type.voice.length)] 
    // }

    set isName(value) {
        this.name = value;
    }

    get isName() {
        return `${this.name} says ${this.type.voice[Math.floor(Math.random()*this.type.voice.length)]}`;
    }

    
}

class Dog extends Animal {
    constructor(otherData) {
        const type = 'Dog';
        super(type, otherData)
    }

}

class Cat extends Animal {
    constructor(otherData) {
        const type = 'Cat';
        super(type, otherData)
    }
}

let dog = new Dog();
let cat = new Cat();

dog.isName = 'Barsik';
console.log(dog.isName)
dog.otherData();
cat.otherData();


