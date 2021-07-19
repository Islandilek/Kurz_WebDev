const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
//newFunc();

//Currying
const multiply = (a,b) => a*b; //just boring function xD 
const curriedMultiply = (a) => (b) => a*b; //function inside of a function
const multiplyByFive = curriedMultiply(5);
console.log(multiplyByFive(2));

//Compose
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
//------>>>>> 
//const compose = (f,g) => (a) => f(g(a));
//const sum1 = (num) => num + 1;
//const sum2 = (num) => num + 1;
//compose(sum1, sum2)(5);
//const compose = (f,g) => (a) => sum1(sum2(5));
//-------------------------------> sum1(6)
//-------------------------------> 7

//Avoiding Side Effects, functional purity
var a = 1;
function b() {
    a = 2; //SIDE EFFECT, IT EFFECTS THE OUTSIDE WORLD by changing var a 
}

const array = [1, 2, 4, 8];

const double = [];
const newArray = array.forEach(num => {
    double.push(num*2);
});
console.log('forEach', double);

// map, filter, reduce
const mapArray = array.map(num => {
    return num*2;
})
console.log('map', mapArray);

//filter
const filterArray = array.filter(num => {
    return num > 3;
})
console.log('filterArray', filterArray);

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5); //starting number for accumulator 
console.log('reduceArray', reduceArray);

