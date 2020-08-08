//this is send data as stringify
const user = {id:1, name: "kamal", friend:["alom", "asa"]};
const userJSON = JSON.stringify(user);
console.log(userJSON);

//this is received without stringify
const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);