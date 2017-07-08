


//person4Name
var oReq = new XMLHttpRequest();
function reqListener(){

  var myObj = JSON.parse(this.responseText);

  document.getElementById("person4Name").innerHTML = myObj.name;

}
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();

//person4HomeWorld
var oReq2 = new XMLHttpRequest();
function reqListener2(){

  var myObj = JSON.parse(this.responseText);

  document.getElementById("person4HomeWorld").innerHTML = myObj.name;

}
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "http://swapi.co/api/planets/1/");
oReq2.send();

//person14Name
var oReq3 = new XMLHttpRequest();
function reqListener3(){

  var myObj = JSON.parse(this.responseText);

  document.getElementById("person14Name").innerHTML = myObj.name;

}
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "http://swapi.co/api/people/14/");
oReq3.send();

//person14Species
var oReq5 = new XMLHttpRequest();
function reqListener5(){

  var myObj = JSON.parse(this.responseText);

  console.log(myObj);

  document.getElementById("person14Species").innerHTML = myObj.name;

}
oReq5.addEventListener("load", reqListener5);
oReq5.open("GET", "http://swapi.co/api/species/1/");
oReq5.send();
