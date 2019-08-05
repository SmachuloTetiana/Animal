(async function() {
    const animalData = await axios.get('./animal.json');
    let selectItem = document.getElementById("selectItem"),
        nameAnimal = document.getElementById("name"),
        btnCreate = document.getElementById("create"),
        animalImage = document.getElementsByClassName("image")[0],
        animalName = document.getElementsByClassName("animal__name")[0],
        animalBreed = document.getElementsByClassName("animal__breed")[0],
        animalVoice = document.getElementsByClassName("animal__voice")[0];

    class Animal {
        constructor(type, additionalData) {
            Object.assign(this, additionalData);

            this.data = animalData.data[type];
        }
    
        get voice() {
            return `${this.name} says ${this.data.voice[Math.floor(Math.random()*this.data.voice.length)]}`;
        } 

        create() {  
            btnCreate.addEventListener('click', function() {
                var selectVal = selectItem.value;
                var inputVal = nameAnimal.value;
  
                this.data = animalData.data[selectVal];
                if(this.data) {
                    animalImage.src = this.data.images[Math.floor(Math.random()*this.data.images.length)];  
                    animalName.innerHTML = inputVal;
                    animalBreed.innerHTML = this.data.breed;
                    animalVoice.innerHTML = this.data.voice[Math.floor(Math.random()*this.data.voice.length)]
                }

            })   
                  
        }
    }
    
    class Dog extends Animal {
        constructor(additionalData) {
            const type = 'dog';
            super(type, additionalData)
        }
    }
    
    class Cat extends Animal {
        constructor(additionalData) {
            const type = 'cat';
            super(type, additionalData)
        }
    }
    
    let dog = new Dog({ name: 'Alf', color: 'brown' });
    let cat = new Cat({ name: 'Kotik', color: 'black' });
    // const animal = new Animal();
    dog.create();

    console.log(dog.voice);
    console.log(cat.voice);


})();



