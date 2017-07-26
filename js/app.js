
//person4Name

fetch('http://swapi.co/api/people/4/')
.then(
  function(response){
    return response.json();
})
.then(
  function(response){
    document.getElementById("person4Name").innerHTML = response.name;
    return response;
})
.then(
  function(response){
    return fetch(response.homeworld);
})
.then(
  function(response){
    return(response.json());
})
.then(
  function(response){
    document.getElementById("person4HomeWorld").innerHTML = response.name;
})



//person14Name

fetch('http://swapi.co/api/people/14/')
.then(
  function(response){
    return response.json();
})
.then(
  function(response){
    document.getElementById("person14Name").innerHTML = response.name;
    return response;
})
.then(
  function(response){
    return fetch(response.species);

})
.then(
  function(response){
    return response.json();
})
.then(
  function(response){
    document.getElementById("person14Species").innerHTML = response.name;
})


//films

fetch('http://swapi.co/api/films/')
.then(
  function(response){
    return response.json();
})
.then(
  function(response){
    console.log(response);
    return response.results;
})
.then(
  function(response){

    response.forEach(function(obj){

      let titleLi = document.createElement('li');
      titleLi.className = "film";
      let filmList = document.getElementById("filmList");
      filmList.appendChild(titleLi);

      let newH2 = document.createElement('h2');
      newH2.className = "filmTitle";
      newH2.innerHTML = obj.title;
      titleLi.appendChild(newH2);

      let newH3 = document.createElement('h3');
      newH3.innerHTML = "Planets";
      titleLi.appendChild(newH3);

      let newUl = document.createElement('ul');
      newUl.className = "filmPlanets";
      titleLi.appendChild(newUl);

        obj.planets.forEach(function(boop){

          fetch(boop)
          .then(
            function(planet){
              return(planet.json());
          })
          .then(function(planet){
            console.log(planet);
            let newLi = document.createElement('li');
            newLi.className = "planet";
            newUl.appendChild(newLi);

            let newH4 = document.createElement('h4');
            newH4.className = "planetName";
            newH4.innerHTML = planet.name;
            newLi.appendChild(newH4);
          })

        })
    })
})



