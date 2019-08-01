let breed = document.getElementsByClassName("breed")[0],
    weight = document.getElementsByClassName("weight")[0],
    eye_color = document.getElementsByClassName("eye_color")[0],
    life_span = document.getElementsByClassName("life_span")[0],
    voice = document.getElementsByClassName("voice")[0];

// breed.innerHTML = 'Dog breed:';

class Animal {
    
    constructor(type) {
        this.type = type;
    }

    otherData() {
        axios
            .get('./animal.json')
            .then(response => {
                // response.data

                if(dog.type === 'Dog') {
                    this.type = response.data.dog;
                    console.log(this.type);
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
            //     voice.innerHTML = dog.voice[Math.floor(Math.random()*dog.voice.length)];
            // })
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

dog.otherData();
cat.otherData();


