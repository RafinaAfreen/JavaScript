var firstName = prompt("First name please: ")
var lastName = prompt("Last name please: ")
var age = prompt("How old are you? ")
var height = prompt("what is your height")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information! ")


//four condition

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//Name condition
if (firstName[0] === lastName[0]) {
  nameCond = true;
}
else {
  nameCond = false;
}
//Age condition
if (age >20 && age <30) {
    ageCond = true;
}
else {
  ageCond = false;
}
//height condition
if (height >= 170) {
  heightCond = true;
}
else {
  heightCond = false;
}
//Pet name
if (petName[petName.length-1] === "y" ) {
  petCond = true;
}
else {
  petCond = false;
}
//check all condition
if (nameCond && ageCond && heightCond && petCond){
  console.log("Welcome spy!");
}
