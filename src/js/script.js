(async function() {

    // let breed = document.getElementsByClassName("breed")[0],
    //     weight = document.getElementsByClassName("weight")[0],
    //     eye_color = document.getElementsByClassName("eye_color")[0],
    //     life_span = document.getElementsByClassName("life_span")[0],
    //     voiceSpan = document.getElementsByClassName("voice")[0];
    
    class Animal {
        constructor(type, additionalData) {
            this.type = type;
            this.name = additionalData.name;
        }
    
        async init() {
            const response = await axios.get('./animal.json');
            
            if(dog.type === 'Dog') {
                this.data = response.data.dog;
            } else if (cat.type === 'Cat') {
                this.data = response.data.cat;
            }
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
            return `${this.name} says ${this.data.voice[Math.floor(Math.random()*this.data.voice.length)]}`;
        }
    
        
    }
    
    class Dog extends Animal {
        constructor(additionalData) {
            const type = 'Dog';
            super(type, additionalData)
        }
    }
    
    class Cat extends Animal {
        constructor(additionalData) {
            const type = 'Cat';
            super(type, additionalData)
        }
    }
    
    let dog = new Dog({ name: 'Alf' });
    let cat = new Cat({ name: 'Kotik' });
    
    await dog.init();
    await cat.init();
    
    console.log(dog.isName);
})();


