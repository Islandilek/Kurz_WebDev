//number = 4 + 3;
//alert("CooL");
//console.log(number);

function sayHello(){
    console.log("Hello");
}
sayHello();

var sayBye = function(){
    console.log("Bye");
}
sayBye();

function sing(song){
    console.log(song);
}
sing("laadeedaa");

var list = ["Tiger", "Cat", "Dog", "Bird"];
console.log(list);
list.shift(); //odebere první
console.log(list);
list.pop(); //odebere posledni
console.log(list);
list.push("Elephant"); //přidá na konec
console.log(list);
console.log(list.concat(["Bee","Deer"])); //přidá pole na konec, vytvoří novej, musíme přidat var
console.log(list); //opět původní
console.log(list.sort());



var list1 = [["Tiger", "Cat", "Dog", "Bird"]];
console.log(list1[0][1]);

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift(); //odebere Banana
array.sort();
array.push("Kiwi"); //přidá na konec
console.log(array);
array.splice(0,1);
console.log(array);
array.reverse();
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

var user = {    //Properties and values; object
    name: "John",
    age: 34,
    hobby: "soccer",
    isMarried: false,
    spells: ["fireball", "frostbolt", "hearthstone"],
    use: function(){     //called method - functions inside an object
        console.log("lolec")
    }
};
console.log(user.hobby);
console.log(user.use());


var list3 = [  //list with objects
    {
        username: "kuba",
        password: 123,
    },
    {
        username: "pepa",
        password: 456, 
    }

]
console.log(list3[0].username);

var database = [
    {
        username: "Kuba",
        password: "secret"
    }
]

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

//var userNamePrompt = prompt("Username");
//var passwordPrompt = prompt("Password");

function signIn(name, pass) {
    if (name === database[0].username && pass === database[0].password){
        console.log(newsfeed);
    } else {
        alert("WRONG PASSWORD OR USERNAM");
    }
};

//function declaration
function newFunction(){

};

//function expression
var newFunction = function(){

};

var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "studying",
    "eat healthy"
];

for (var i=0;i<todos.length;i++){
    console.log(todos[i])
}