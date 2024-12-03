



const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;

const firstElementChild = bodyElement.firstElementChild;
const lastElementChild = bodyElement.lastElementChild;

const childNodes = bodyElement.childNodes;


// all querySelectors methods return static collection

const myList = bodyElement.querySelectorAll('.myList'); // for class in html; return node collection of elements;
// console.log(myList);

const myList1 = document.querySelectorAll('ul'); // for teg in html; return node collection of elements
// console.log(myList1);

const myList2 = document.querySelectorAll('ul.myList'); // for teg with class in html; return node collection of elements
// console.log(myList2);

const myList3 = document.querySelectorAll('.myList>ul'); // for all child with class, with teg; return node collection of elements
// по тегу першого рівня вкладенності
// console.log(myList3);

const myList4 = document.querySelectorAll('.item1, .item3'); // for few classes; return node collection of elements
// console.log(myList4);

const myList5 = document.querySelectorAll('.myList .item1'); // for all classes2 in class1; return node collection of elements
// console.log(myList5);

const myList6 = document.querySelectorAll('#box'); // by id; return node collection of elements
// console.log(myList6);

const myList7 = document.querySelector('.myList');
// console.log(myList7);



// all getElements methods return live collection

const myList8 = document.getElementById('item2');
// console.log(myList8);

const myList9 = document.getElementsByTagName('li')
// console.log(myList9);

const myList10 = document.getElementsByClassName('item1')
// console.log(myList10);

const myList11 = document.getElementsByName('list')
// console.log(myList11);



////////////////////////////////////////зміна, заміна

const textElement1 = document.querySelector('.first-list .item1');

const str1 = textElement1.innerHTML; //without object (teg) "pipipapa"
// console.log(str1);

textElement1.innerHTML = '<p class="PesPatron">popa de<span style="color: blue" >pipa</span></p>';


const textElement2 = document.querySelector('.second-list .item1')

const str2 = textElement2.outerHTML; // <li class="item1" id="item1">Пункт 1</li>
// console.log(str2);

textElement2.outerHTML = '<li class="item1">Pes patron trumav <span style="color: blue">rayon</span></li>';


const textElement3 = document.querySelector('.globalUl .item1')

const str3 = textElement3.textContent; // захтсь від помилок інєкції залежностей
// console.log(str3);

// textElement3.textContent = '<p>Pes patron trumav <span style="color: blue">rayon</span></p>';



///////////////////////////////////створення

const newElement4 = document.createElement('div');

newElement4.innerHTML = '<p>Pes patron trumav <span style="color: yellow">rayon</span></p>';

// myList7.before(newElement4);
// myList7.after(newElement4);
// myList7.prepend(newElement4); // в середині вказаного обєкта тега myList7
// myList7.append(newElement4); // в середині вказаного обєкта тега myList7 але вкінці всього контента myList7


const newElement5 = document.querySelector('.myList');
newElement5.insertAdjacentHTML( //insertAdjacentHTML, insertAdjacentText, insertAdjacentElement
    'afterend',
    '<p>Pes patron trumav <span style="color: yellow">rayon</span></p>'
)

///////////////////////<p>Pes patron trumav <span style="color: yellow">rayon</span></p> - рівень html
///////////////////////Pes patron trumav <span style="color: yellow">rayon</span> - рівень html - рівень element
///////////////////////Pes patron trumav rayon - рівень text



////////////////////// перенесення об'єкта
const firstElement = document.querySelector('.red');
const secondElement = document.querySelector( '.PesPatron');

// console.log(secondElement);
// firstElement.append(secondElement)



//////////////клонування
// const cloneTextElement = secondElement.cloneNode(true);

// cloneTextElement.append(firstElement);



////////////////////Керування классами

// console.log('elementClassName: ', firstElement.className);// class .red

// firstElement.className = "blue";
// console.log('elementClassName: ', firstElement.className);// class .blue

// classList methods
firstElement.classList.add('small'); // додавання
firstElement.classList.toggle('blue');// додасть клас якщо він відсутній або видалить класс, якщо він присутній
firstElement.classList.remove('blue');// видалення
firstElement.classList.contains('small'); // true or false
// for (let name of firstElement.classList) {
//     console.log(name);
// }



///////////////////////Керування стилями

firstElement.style.color = 'orange'
firstElement.style.marginTop = '30px';


firstElement.style.cssText = 'margin-top: 30px; color: orange' // перезаписує весь css стиль в html файлі класса


const elementStyle = getComputedStyle(firstElement); // повертає текущий css стан обєкта. only for read
// console.log(elementStyle.margin);

const elementBeforeStyle = getComputedStyle(firstElement, "::before"); // стиль псевдоелемента
// console.log(elementBeforeStyle.backgroundColor);


const marginTop = parseInt(elementStyle.marginTop);

// console.log(firstElement.style.marginTop);
firstElement.style.marginTop = (marginTop + 10) + 'px';
// console.log(firstElement.style.marginTop);



////////////////////////атрибути та властивості

const link = document.querySelector('.globalUl a')
const input = document.querySelector('.globalUl input');

// console.log(link.href);
// console.log(input.value);

input.value = 'new def value';


link.hasAttribute('name');//true/false
link.getAttribute('name');
link.setAttribute('name', 'name'); //ім'я атрибута, нове значення атрибута
link.removeAttribute('name');


// console.log(link.dataset.price) // стандарт зберігання додаткових данних - data-*; lower camel case
// console.log(link.tagName) // повертає тег в uppercase


link.hidden = false; //скриває весь об'єкт

let str = "dsfsdf"
let num = Number(str);
// console.log(Number.isNaN(num));

let user={};
 user.name = "Kolya"
 user.age = 45

for (let userKey in user) {
    // console.log(userKey + " : " + user[userKey]);

}
////////////////////////////Function
const arrayFunction = function() {
    const arr = Array.from(arguments);
    // console.log(arr);
}
arrayFunction(4,5,6,4,"dsfdf,", true)

const arrayFunction2 = function(...args) {
    // console.log(args);
}
arrayFunction2(4,5,6,4,"dsfdf,", true)

function ask(question, yes, no) {
    // if(confirm(question)) {
        yes();
    // }else{
        no()
    // }
}
function showOk(){
    console.log("yes")
}
function showCancel() {
    console.log("canceled")
}
// ask("how do you feel?", showOk, showCancel);

////////////////////////////////////////////callback


const hello1 = (name) =>{
    console.log(`hello ${name}`)
}

const searchName2 = (callback) => {
    const name = "serega"
    callback(name)
}
// searchName2(hello1)

///////////////////////////замикання


function createUrl(domain){
    return function (url){
        return 'https://${url}.${domain}';
    }
}

const comUrl = createUrl("com");
// console.log(comUrl("google"));



//////////////////////////this


function sayHello(){
    console.log("sayHello ", this)
}


const user1 = {
    name: "John",
    age: 23,
    hello: sayHello,
};
// user1.hello()

function abc(){
    console.log(this)
}
// document.querySelector('#PHello').onclick = abc;


///////////////////////////////////////////


function changeColor(){
    this.style.color = 'blue';
}
const users = document.querySelectorAll('.DivHuman p');
users.forEach(user => {
        user.onclick = changeColor;
})

//////////////////////////////////// function methods: bind, call, apply
//////////////////////////////////// bind - creating new object for some methods with some parameters


function hello2(){
    console.log(this)
}

const user3 = {
    name: 'John',
    age: 23,
    sayHelloWindows: hello2.bind(window),
    info: function (city) {
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`City is ${city}`)
    },
};
// user3.info()

const Anna = {
    name: 'Anna',
    age: 25,
};

const Bogdan = {
    name: 'Bogdan',
    age: 25,
    city: "Geirop"
}
// user3.info.bind(Anna, "Ternopil")();
// user3.info.bind(Bogdan)(Bogdan.city);


/////////////////////////////////////////// call - calling some methods with some parameters


const userInfo = {
    name: 'Vova',
    age: 54,
    logInfo: function(job){
        console.group(`info`)
        console.log(`Name is : ${this.name}`)
        console.log(`Age is : ${this.age}`)
        console.log(`Job is : ${job}`)
        console.groupEnd();
    }
};

const Ivanov = {
    name: 'Ivanov',
    age: 64,
}

// userInfo.logInfo.call(Ivanov, "developer");


/////////////////////////////////////////apply - calling some methods with some parameters in array



const showUserInfo = {
    name: "Lera",
    age: 43,
    logInfo(job, city){
        console.group(`info`)
        console.log(`Name is : ${this.name}`)
        console.log(`Age is : ${this.age}`)
        console.log(`Job is : ${job}`)
        console.log(`City is : ${city}`)
        console.groupEnd();
    }
}

const Sahsa = {
    name: 'Sahsa',
    age: 45,
}

// showUserInfo.logInfo.apply(Sahsa, ['gemeDev', "NewYork"]);



const cart = {
    showItems(){
        console.log("In collection: ", this.items)
    },

};

const woman = {
    items: ["Skirt, T-short"]
}
const men = {
    items: ["Trousers, T-shirt"]

}
const kid = {
    items: ["Shorts, Socks"]
}


document
    .querySelector('#woman')
    .addEventListener('click', cart.showItems.bind(woman));
document
    .querySelector('#kid')
    .addEventListener('click', cart.showItems.bind(kid));
document
    .querySelector('#men')
    .addEventListener('click', cart.showItems.bind(men));


////////////////////////////classes and objects


class Bank {
    static type = "Private";
    constructor(options){
        this.summ = options.summ;
        this.month = options.month;
        this.p = options.p;
    }

    credit(){
        return "Privat";
    }
}

const userBank = new Bank({
    summ: 3000,
    month: 5,
    p: 5,
})

class NewBank extends Bank{
    constructor(options) {
        super(options);
        this.card = options.card;
    }
    credit() {
        return text + "Aval";
    }
}
const aval = new NewBank({
    summ: 5000,
    month: 2,
    p: 1,
    card: "credit"
});

// console.log(aval.credit());

///////////////getter setter

class User{
    constructor(props) {
        this.name = props;
    }
    firstName = "";
    _lastName = "";
    _age = "";
    _city = "";


    set name(newName) {
        this._firstName = newName[0];
        this._lastName = newName[1];

    }

    get name() {
        return  `${this.firstName} ${this._lastName}`;
    }
}




const Manager = function (name, sales){
    this.name = name;
    this.sales = sales;

}


Manager.prototype. sale = function (){


    this.sales++;
}
const ivan = new Manager("vanya", 10)



class CoffeMachine {
    _water = 0;
    #waterLimit = 500;

    constructor(power) {
        this.power = power;
    }

    set waterAdd(value){
        if(value < 0){
            value = 0;
        }
        this._water += value;
    }


}


