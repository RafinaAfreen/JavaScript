var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLenght: function(){
    console.log(this.name.lenght);
  }
}
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  repot:function(){
    alert("Name is "+this.name+", Job is: "+this.job+", Age is: "+this.age);
  }
}
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function(){
    console.log(this.name.split(" ")[1])
  }
}
