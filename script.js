var pokeSearch = document.getElementById("search");
var pokeName = document.getElementById("pokemon-name");
var pokeType = document.getElementById("type");
var pokeMove1 = document.getElementById("a1");
var pokeMove2 = document.getElementById("a2");
var pokeMove3 = document.getElementById("a3");
var pokeMove4 = document.getElementById("a4");

pokeSearch.addEventListener('click', function(event){
    event.preventDefault()
var pokeInput = document.getElementById("search-bar").value
var pokeURL = "https://pokeapi.co/api/v2/pokemon/" + pokeInput + "/";
console.log(pokeURL);

fetch(pokeURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      pokeName.textContent = data.forms[0].name;
      pokeType.textContent = data.types[0].type.name;
      
      pokeMove1.textContent = data.moves[0].move.name;
      pokeMove2.textContent = data.moves[1].move.name;
      pokeMove3.textContent = data.moves[2].move.name;
      pokeMove4.textContent = data.moves[3].move.name;



    })
})

let APIKEY = "TBp5JZEQGwFT3u2bIcUORi3Fie4ChGyR";
document.addEventListener("")

let url = 'api.giphy.com/v1/gifs/search?api_key=$' + APIKEY + '&limit=1&q=';
let str = document.getElementById("search").ariaValueMax.trim();
url = url.concat(str);
fetch(url)
.then(response => response.json() )
.then(content => {
    console.log(content.data);
    console.log("META", content.meta);
    let fig = document.createElement('figure');
    let img = document.createElement('img');
    let fc = document.createElement('figcaption');
    img.src = content.data[0].images.downsized.url;
    img.alt = content.data[0].title;
    fc.textContent = content.data[0].title;
    fig.appendChild(img);
    fig.appendChild(fc);
    let gif = document.querySelector('.gif');
    gif.insertAdjacentElement('afterbegin', fig)
    document.querySelector('#search').value ='';
})
.catch(err => {
    console.error(err);

})


