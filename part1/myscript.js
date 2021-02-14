var hot = false
var temp = 30

if (temp>80){
  console.log("hot outside!");
}
else if(temp <=80 && temp >= 50){
  console.log("Average temp outside");
}
else if(temp <=50 && temp >= 32){
  console.log("Its pretty cold outside");
}
else{
  console.log("its very cold");
}

var ham = 10;
var cheese = 10;

var report = "blank";

if (ham >= 10 && cheese >= 10){
  report = "Strong sales of both ham and cheese"
}
else if (ham == 0 && cheese == 0) {
  report = "nothing sold!"
}
else {
  report = "We had some sales of items"
}
console.log(report);

var x = 0;

while (x < 5){
  console.log("x is currently:" +x);

  if (x===3){
    console.log("x is 3");
    break;
  }
    console.log("x is still less than 5, adding 1 to x");

  x =x+1;
}


//print 1 to 10 even number.

var num = 1;

while (num < 11){
  if (num%2 === 0){
    console.log(num);
  }
  num = num+1;
}

//forloop
for (var i = 0; i < 5; i++) {
  console.log("number is " +i);
}

var word = "ABABABABAB"

for (var i = 0; i < word.length; i=i+2) {
  console.log(word[i]);
}

//Exercise
//while loop
var y=1;
while (y<6) {
  console.log("hello");
  y++;
}
//forloop
for (var i = 0; i < 5; i++) {
  console.log("hello with for loop");
}

var num1 = 1;

while (num1 < 25){
  if (num1%2 === 1){
    console.log(num1);
  }
  num1 = num1+1;
}

for (var i = 0; i < 25; i++) {
  if (i%2 !== 0) {
    console.log(i);
  }
}
