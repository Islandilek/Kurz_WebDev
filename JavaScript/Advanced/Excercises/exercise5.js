// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const empty = [];
const dangerName = array.forEach(element =>{
  x = element.username + "!";
  empty.push(x);
})

//Create an array using map that has all the usernames with a "?" to each of the usernames
const newArray = array.map(user => {
  newName = user.username + "?";
  return newName;
})

//Filter the array to only include users who are on team: red
const redTeam = array.filter(user => {
  return user.team === "red"
})

//Find out the total score of all users using reduce
const sum = array.reduce((accumulator, user) =>{
  return accumulator + user.score;
}, 0);

// (1), what is the value of i? length of array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => {
	//console.log(num, i);
	//alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const dangerItems = array.map (element=>{
  element.items = element.items.map(item=>{
    newItemName = item + "!";
    return newItemName;
  })
  return element;
})