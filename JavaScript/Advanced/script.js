function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";
var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available"); 

//stejne jako tohle 
function condition(){
    if (isUserValid(true)){
        return "You may enter";
    } else {
        return "Acces denied";
    }
}
var answer2 = condition();

function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default: 
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
window.moveCommand("right");



//Jak se pise kod dnes --> DULEZITE !!!!!

//let + const
const player = 'bobby'; //cannot be updated it will never change, good for functions if its not going to change
let experience = 100;
let wizardLevel = false;

if (experience>90){
    let wizardLevel = true;
    console.log('isnide', wizardLevel)
}
console.log('outside', wizardLevel)

experience = 80;
console.log(experience);

//Objects
const obj = { //muzeme menit vlastnosti v objektu i presto, ze je to konstanta
    player: 'bobby',
    experience: 100,
    wizardLevel: false
}
obj.experience=200;
console.log(obj);

//const {player, experience} = obj;
//let {wizardLevel} = obj;

//object properties
const name = 'John Snow';
const obj1 = {
    [name]: 'hello',
    [1+2]: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};
const obj2 = {
    a,
    b,
    c
}

//template strings
const greeting = "fine";
const greeting1 = "Hello " + name + " you seem to be doing " + greeting + "!";
//-better->
const greetingBest = `Hello ${name} you seem to be doing ${greeting}!`; 
function greet(name='', age = 30, pet='cat'){
    return `Hello ${name} you seem to be doing ${age}! What a lovely ${pet}!`; 
}

//Symbols
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

//arrow functions
function add(a,b){
    return a+b;
}
//-->
const add1 = (a,b) => a+b;

























