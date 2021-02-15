function hello(){
  console.log("Hello world!");
}
function helloYou(name){
  console.log("Hello " +name);
}
function addNum(num1,num2){
  console.log(num1+num2);
}
function helloSomeone(name = "Frankie"){
  console.log("hello " +name);
}
function formal(name="Sam" , title= "Sir"){
  return title + " " +name;
}
function timesFive(numInput){
  //local scope to the function!
  var result = numInput * 5
  return result
}

//global scope
var v = " Global variable"
var stuff ="Global stuff"

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);
}

fun();
console.log(stuff);

//Exercise
//1
function sleepIn(weekday, vacation){
  return (!weekday || vacation)
}
//2
function monkeyTrouble(aSmile, BSmile){
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}
//3
function stringTimes(str, n){
  var returnStr = "";
  var i = 0;
  while (i<n) {
    returnStr +=str
    i++
  }
  return returnStr
}
//4
function luckySum(a, b, c){
  if (a === 13) {
    return 0
  }
  else if (b === 13){
    return a
  }
  else if(c === 13){
    return a+b
  }
  return a+b+c
}
//5
funtion caught_(speed, is_birthday){
  if(is_birthday){
    speed -=5
  }
  if (speed <= 60) {
    return 0
  }
  if(60<speed<=80){
    return 1
  }
  return 2
}
//6
function makeBricks(small, big, goal){
  return goal%5 >= 0 && goal%5-small <= 0 && small + 5*big >=goal ;
}
