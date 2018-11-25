
class Player {
    constructor (name, type) {
        this.name = name;
        this.type = type;
    }
    introduce () {
        console.log(`Hi i am ${this.name}, I'm a ${this.type} `);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play () {
        debugger;
        console.log(`Hey, I am ${this.type} `);
    }
}

const Wizard1 = new Wizard('Shelly', "Healer");
