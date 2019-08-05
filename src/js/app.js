(async function() {
    const animalData = await axios.get('./animal.json');
    let selectItem = document.getElementById("selectItem");
    
    class Animal {
        constructor(type, additionalData) {
            Object.assign(this, additionalData);

            this.data = animalData.data[type];
        }
    
        get voice() {
            return `${this.name} says ${this.data.voice[Math.floor(Math.random()*this.data.voice.length)]}`;
        }  

        createAnimal() {
            return selectItem.value;
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

    console.log(dog.voice);
    console.log(cat.voice);
    console.log(dog.createAnimal())
})();



