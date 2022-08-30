var pokeSearch = document.getElementById("search");
var pokeName = document.getElementById("pokemon-name");
var pokeType = document.getElementById("type");
var pokeMove1 = document.getElementById("a1");
var pokeMove2 = document.getElementById("a2");
var pokeMove3 = document.getElementById("a3");
var pokeMove4 = document.getElementById("a4");
var addButton = document.getElementById("addBTN");
var pokemonOne = document.getElementById("p1");
var pokemonTwo = document.getElementById("p2");
var pokemonThree = document.getElementById("p3");
var pokemonFour = document.getElementById("p4");
var pokemonFive = document.getElementById("p5");
var pokemonSix = document.getElementById("p6");

//search button click function

pokeSearch.addEventListener('click', function(event){
    event.preventDefault()

var pokeInput = document.getElementById("search-bar").value
var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeInput;
var giphyURL = "https://api.giphy.com/v1/gifs/search?api_key=IMh3RIefMtFd7bt0SsRLLBCGIAlLn4wN&limit=2&q=" + pokeInput;
console.log(pokeURL);
console.log(giphyURL);

fetch(pokeURL)
    .then(function (response) {
        if (response.status == "404") {
            pokeName.textContent = "Pokemon doesn't exist";
        }
            return response.json();

    })
    .then(function (data) {
      console.log(data);
      pokeName.textContent = data.forms[0].name;

      //add button
      var add = document.createElement("span");
      //getElementById("addBTN").innerHTML = "Add " + data.forms[0].name;
      getElementById("addBTN").appendChild(add);

      //display type
      pokeType.textContent = data.types[0].type.name;
      //display moves/abilities
      pokeMove1.textContent = data.moves[0].move.name;
      pokeMove2.textContent = data.moves[1].move.name;
      pokeMove3.textContent = data.moves[2].move.name;
      pokeMove4.textContent = data.moves[3].move.name;


//Add pokemon to team button click function



      add.addEventListener('click', function(event){
        event.preventDefault()

        add.style.display = "none";

        var pokeNames = [];
        pokeNames[0] = data.forms[0].name;

        localStorage.setItem("name", pokeNames);
        //if slot 1 is availble use slot 1...
        if (pokemonOne.innerHTML === "pokemon1") {
            pokemonOne.textContent = localStorage.getItem("name");
            //remove button 1
            var remove1 = document.createElement("span");
            remove1.innerHTML = "remove";
            document.getElementById("remove1").appendChild(remove1);
            //remove button click function
            remove1.addEventListener('click', function(event){
                event.preventDefault();
                pokemonOne.innerHTML = "pokemon1";
                remove1.style.display = "none";
            })



} else if (pokemonTwo.innerHTML === "pokemon2" && pokemonOne.innerHTML !== "pokemon1") {
            pokemonTwo.textContent = localStorage.getItem("name");
            //remove button 2
            var remove2 = document.createElement("span");
            remove2.innerHTML = "remove";
            document.getElementById("remove2").appendChild(remove2);
            //remove button 2 click function
            remove2.addEventListener('click', function(event){
                event.preventDefault();
                pokemonTwo.innerHTML = "pokemon2";
                remove2.style.display = "none";
            })

        } else if (pokemonThree.innerHTML === "pokemon3" && pokemonTwo.innerHTML !== "pokemon2" && pokemonOne.innerHTML !== "pokemon1") {
            pokemonThree.textContent = localStorage.getItem("name");
            //remove button 3
            var remove3 = document.createElement("span");
            remove3.innerHTML = "remove";
            document.getElementById("remove3").appendChild(remove3);
            //remove button 3 click function
            remove3.addEventListener('click', function(event){
                event.preventDefault();
                pokemonThree.innerHTML = "pokemon3";
                remove3.style.display = "none";
            })


} else if (pokemonFour.innerHTML === "pokemon4" && pokemonThree.innerHTML !== "pokemon3" && pokemonTwo.innerHTML !== "pokemon2" && pokemonOne.innerHTML !== "pokemon1") {
            pokemonFour.textContent = localStorage.getItem("name");
            //remove button 4
            var remove4 = document.createElement("span");
            remove4.innerHTML = "remove";
            document.getElementById("remove4").appendChild(remove4);
            //remove button 4 click function
            remove4.addEventListener('click', function(event){
                event.preventDefault();
                pokemonFour.innerHTML = "pokemon4";
                remove4.style.display = "none";
            })

        } else if (pokemonFive.innerHTML === "pokemon5" && pokemonFour.innerHTML !== "pokemon4" && pokemonThree.innerHTML !== "pokemon3" && pokemonTwo.innerHTML !== "pokemon2" && pokemonOne.innerHTML !== "pokemon1") {
            pokemonFive.textContent = localStorage.getItem("name");
            //remove button 5
            var remove5 = document.createElement("span");
            remove5.innerHTML = "remove";
            document.getElementById("remove5").appendChild(remove5);
            //remove button 5 click function
            remove5.addEventListener('click', function(event){
                event.preventDefault();
                pokemonFive.innerHTML = "pokemon5";
                remove5.style.display = "none";
            })
      } else if (pokemonSix.innerHTML === "pokemon6" && pokemonFive.innerHTML !== "pokemon5" && pokemonFour.innerHTML !== "pokemon4" && pokemonThree.innerHTML !== "pokemon3" && pokemonTwo.innerHTML !== "pokemon2" && pokemonOne.innerHTML !== "pokemon1") {
            pokemonSix.textContent = localStorage.getItem("name");
            //remove button 6
            var remove6 = document.createElement("span");
            remove6.innerHTML = "remove";
            document.getElementById("remove6").appendChild(remove6);
            //remove button 6 click function
            remove6.addEventListener('click', function(event){
                event.preventDefault();
                pokemonSix.innerHTML = "pokemon6";
                remove6.style.display = "none";
            })


        }
     } )
    })
    var gif = document.getElementById("gif");

    fetch(giphyURL)
    .then(function (response) {
      return response.json();

    })
    .then(function (dataGiphy) {
      console.log(dataGiphy);
      gif.src= dataGiphy.data[0].images.downsized.url;



    })
})
