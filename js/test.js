//Stack (Primitive)
let myName = "anamikadixit";
let anotherName = myName;
anotherName = "dixitanamika";

console.log(myName);
console.log(anotherName);

//Heap (Non-Primitive)
let userOne = {
  email: "anamika@gmail.com",
};
let userTwo = userOne;
userTwo.email = "dixit@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
