const pets = ['bird', 'cat', 'dog','parrot'];
console.log(pets.includes('dog'));


const square = (x) => x**2;
console.log(square(3));
console.log(square(5));


console.log("Cool".padStart(10));
console.log("Cool".padEnd(10));


const fun = (a,b,c,d,) => {
    console.log(a);
}
console.log(fun(1,2,3,4,))

let obj = {
    username0: 'Rudolf',
    username1: 'Santa',
    username2: 'Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

console.log(Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
}))


const array = [1,[2,3],[4],5]
console.log(array.flat()); //it will flaten the array 
const array2 = [1,[2,[3]],[4],5]
console.log(array2.flat(2)); //cislo udava kolik vrstev se ma 'flaten'
//jurassicPark.flatMap(creature => creature + 'cool')


const userEmail = '                   dasdadad@dad.com'
const userEmail2 = 'adadasda@dasda.com                '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())


userProfiles = [['commanderTom', 23], ['derekCoc', 40], ['hansel', 18]]
Object.fromEntries(userProfiles) //creates object


try {
    4 + 5;
}catch{
    
}