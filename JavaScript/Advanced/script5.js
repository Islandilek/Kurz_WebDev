const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 100,
}

//1
for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

console.log(basket);

//2
basket.forEach(item=>{
    console.log(item);
})

console.log(basket);

//3 - For of - Iterating - arrays, strings
for (item of basket){
    console.log(item);
}

console.log(basket);

//4 - For in - Enumerating - objects
for (item in detailedBasket){
    console.log(item);
}


//kdyz chceme kontrolovat jestli je v objektu urcita vec, check
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);

// now we can use ?? instead of || but it works slightly different

