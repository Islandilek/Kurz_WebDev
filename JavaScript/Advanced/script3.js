//reference type
var object1 = {value:10}; //if updated 1 will also update 2 
var object2 = object1; //reference to object1
var object3 = {value:10};

object1 === object2; //true 
object1 === object3; //false

//context

const object4 = {
    a: function(){
        console.log(this);
    }
}

//instantion
class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi Iam ${this.name} and Iam ${this.type}!`)
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }
    play(){
        console.log(`Weeeeeeeeee Iam a ${this.type}`);
    }
}
const wizard1 = new Wizard("Shelly", "healer");
const wizard2 = new Wizard("Shawn", "warlock");

//clone object
let obj = {a: "a", b: "b", c: "c"};
let clone = Object.assign({}, obj); //first level clone, shallow cloning
clone.c = 5;
console.log(clone);
console.log(obj);

let superClone = JSON.parse(JSON.stringify(obj)); //clones everything, deep cloning

//type coercion

