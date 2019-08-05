(async function() {
    const animalData = await axios.get('./animal.json');
    let selectItem = document.getElementById("selectItem"),
        nameAnimal = document.getElementById("name"),
        btnCreate = document.getElementById("create"),
        animalImage = document.getElementsByClassName("image")[0],
        animalName = document.getElementsByClassName("animal__name")[0],
        animalBreed = document.getElementsByClassName("animal__breed")[0],
        animalVoice = document.getElementsByClassName("animal__voice")[0];

    class AnimalApp {
        constructor() {
            const animals = {
                dog: Dog,
                cat: Cat
            }; 

            this.initEventListeners(animals);
        }

        initEventListeners(animals) {
            btnCreate.addEventListener('click', function() {
                const selectVal = selectItem.value;
                const name = nameAnimal.value;
                const animal = new animals[selectVal]({ name });

                animalImage.src = animal.data.images[Math.floor(Math.random()*animal.data.images.length)];  
                animalName.innerHTML = name;
                animalBreed.innerHTML = animal.data.breed;
                animalVoice.innerHTML = animal.data.voice[Math.floor(Math.random()*animal.data.voice.length)]

            });
        }
    }
    

    class Animal {
        constructor(type, additionalData) {
            Object.assign(this, additionalData);

            this.data = animalData.data[type];
        }
    
        get voice() {
            return `${this.name} says ${this.data.voice[Math.floor(Math.random()*this.data.voice.length)]}`;
        } 
    }
    
    class Dog extends Animal {
        constructor(additionalData) {
            const type = 'dog';
            super(type, additionalData);
        }
    }
    
    class Cat extends Animal {
        constructor(additionalData) {
            const type = 'cat';
            super(type, additionalData);
        }
    }

    new AnimalApp();
})();



