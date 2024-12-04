class CircleBox {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    hide(){
        this.$el.style.display = 'none';
    }

    show(){
        this.$el.style.display = 'block';
    }
}

class CircleItem extends CircleBox {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.size + 'px';
        this.$el.style.height = options.size + 'px';
        this.$el.style.borderRadius = "50%";
        this.$el.style.background = options.color;
    }
}

const circleBlack = new CircleItem({
    selector: '#circle-black',
    color: 'black',
    size: 65,
});
const circleBlue = new CircleItem({
    selector: '#circle-blue',
    color: 'blue',
    size: 65,
});
const circleGreen = new CircleItem({
    selector: '#circle-green',
    color: 'green',
    size: 65,
});


//////////////////////add function by prototype


function Car(name, color){
    this.name = name;
    this.color = color;
}

Car.prototype.message = function(){
    console.log(`${this.name} is ${this.color}`);
}
Car.prototype.start = function(){
    console.log(`${this.name} is started`);
}

const BMW = new Car("bmw", "red")
const Opel = new Car("opel", "green")


////////////////////міксин


let message = {
    messageHello(){
        console.log(`Hello, ${this.name}`);
    },
    messageBye(){
        console.log(`Hello, ${this.name}`);
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}
Object.assign(User.prototype, message);


new User("Ivan").messageHello();


//////////////////транспілятор або поліфіли для переносу змін з старої версії на нову

height = height ?? 100

