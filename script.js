let APIKEY = "TBp5JZEQGwFT3u2bIcUORi3Fie4ChGyR";
document.addEventListener("")

let url = 'api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=';
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
