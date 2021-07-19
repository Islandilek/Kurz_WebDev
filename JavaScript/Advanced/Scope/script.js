//ROOT SCOPE
var fun = 5;

function funFunction(){
    //child scope
    var fun = "hello";
    console.log(fun);
}

console.log(fun);
funFunction();
console.log(fun);

function funerFunction(){
    //child scope
    fun = "nice";
    console.log(fun);
}

console.log(fun);
funerFunction();
console.log(fun);

