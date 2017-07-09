


//person4Name
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();
function reqListener(){

  var myObj = JSON.parse(this.responseText);

  document.getElementById("person4Name").innerHTML = myObj.name;

  //person4HomeWorld
  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener("load", reqListener2);
  oReq2.open("GET", myObj.homeworld);
  oReq2.send();
  function reqListener2(){

    var myObj2 = JSON.parse(this.responseText);

    document.getElementById("person4HomeWorld").innerHTML = myObj2.name;
  }
}



//person14Name
var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "http://swapi.co/api/people/14/");
oReq3.send();
function reqListener3(){

  var myObj3 = JSON.parse(this.responseText);

  document.getElementById("person14Name").innerHTML = myObj3.name;

  //person14Species
  var oReq5 = new XMLHttpRequest();
  oReq5.addEventListener("load", reqListener5);
  oReq5.open("GET", myObj3.species[0]);
  oReq5.send();
  function reqListener5(){

    var myObj5 = JSON.parse(this.responseText);

    document.getElementById("person14Species").innerHTML = myObj5.name;
  }
}

//films
var oReq6 = new XMLHttpRequest();
function reqListener6(){

  var myObj = JSON.parse(this.responseText);

  myObj.results.forEach(function(film){

    let titleLi =document.createElement('li');
    titleLi.className = "film";
    let filmList = document.getElementById("filmList");
    filmList.appendChild(titleLi);

    let newH2 = document.createElement('h2');
    newH2.className = "filmTitle";
    newH2.innerHTML = film.title;
    titleLi.appendChild(newH2);

    let newH3 = document.createElement('h3');
    newH3.innerHTML = "Planets";
    titleLi.appendChild(newH3);

    let newUl = document.createElement('ul');
    newUl.className = "filmPlanets";
    titleLi.appendChild(newUl);

    film.planets.forEach(function(planet){

      var oReq7 = new XMLHttpRequest();
      oReq7.addEventListener("load", reqListener7);
      oReq7.open("GET", planet);
      oReq7.send();
      function reqListener7(){

        var myObj7 = JSON.parse(this.responseText);

        let newLi = document.createElement('li');
        newLi.className = "planet";
        newUl.appendChild(newLi);

        let newH4 = document.createElement('h4');
        newH4.className = "planetName";
        newH4.innerHTML = myObj7.name;
        newLi.appendChild(newH4);
      }
    });
  });

}
oReq6.addEventListener("load", reqListener6);
oReq6.open("GET", "http://swapi.co/api/films/");
oReq6.send();

// STRUCTURE OF AN XML REQUEST:
// var oReq = new XMLHttpRequest();

// function reqListener(){

// }

// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/people/4/");
// oReq.send();