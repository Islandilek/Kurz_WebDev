
document.getElementsByTagName("button");
document.getElementsByClassName("second")[0];
document.getElementById("first");

document.querySelector("h1");

document.querySelector("li"); //selects the first item unlike querySelectorAll
document.querySelectorAll("li");  //can use [] abych si urcil presne kterej radek listu chci

document.querySelectorAll("li")[0].getAttribute("random"); //GET
document.querySelectorAll("li")[0].setAttribute("random","100"); //SET

document.querySelector("h1").style.background = "blue"; //change styles --> prida je ale k html

//Kdyz budeme chtit menit CSS style, je dobre vyuzit meneni nebo pridani tridy 
var h1 = document.querySelector("h1");
h1.className = "cool";

document.querySelector("h1").classList;
document.querySelector("h1").classList.add("something");
document.querySelector("h1").classList.toggle("something"); //basically turning off and on
document.querySelector("h1").classList.remove("something");

document.querySelector("h1").innerHTML = "<strong>COOL!</strong>"; //dangerous

document.querySelectorAll("li")[1].parentElement; //vypise ul
document.querySelectorAll("body").children;





//BUTTON LISTENER
//var button = document.getElementsByTagName("button")[0];
//button.addEventListener("click", function(){console.log("CLICK!")}); //MDN ma hrozne moc druhu, napr: mouseenter, mouseleave, atd.....


var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
};
function createListElement(){
    var li = document.createElement("li"); //vytvorime li
        li.appendChild(document.createTextNode(input.value)); //vytvorime text do li
        ul.appendChild(li); //pridame do ul
        input.value = "";
};

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
};

function addListAfterEnter(event){
    if (inputLength() > 0 && event.keyCode == 13){
        createListElement();
    }
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);













