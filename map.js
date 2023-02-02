// Creating map options
let mapOptions = 
{
    center: [48.8702, 2.3368],
    zoom: 3
}

// Creating a map object
let map = new L.map('map', mapOptions);

// Creating a Layer object
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// Adding layer to the map
map.addLayer(layer);

//Wineyard locations:
let locations = [
    {
        "id": "Lafitte",
        "lat": 44.73349384627244, 
        "long": -0.5577853110844696,
        "title": "Chateau Smith Haut Lafitte",
        "url": "https://www.smith-haut-lafitte.com/en/home/",
        "src": "image/lafitte.jpg",
        "info": `Château Smith Haut Lafitte is a Bordeaux wine from the Pessac-Léognan appellation, 
        ranked among the Crus Classés for red wine in the Classification of Graves wine of 1953 and 1959.
        The winery and vineyards are located south of the city of Bordeaux, in the commune of Martillac.`
    },
    {
        "id": "Fetzer",
        "lat": 38.98981879389152, 
        "long": -123.10097584166148,
        "title": "Fetzer Winery",
        "url": "https://fetzer.com/",
        "src": "image/fetzer.png",
        "info": `Fetzer stands for a good today and a better tomorrow. 
        We inspire change—one glass at a time—by uniting business with purpose to do right by people and the planet.
        We believe every day is an opportunity to do good. Our iconic collection of award-wining wines is just one way we are making an impact. `
    },
    {
        "id": "Torres",
        "lat": 41.343522799293225,
        "long": 1.705595184591737,
        "title": "Bodegas Torres",
        "url": "https://www.torres.es/en",
        "src": "image/bodegas.jpg",
        "info": `We are committed to promoting a management, production, and commercialization system that has a
        positive impact on society, based on the twin pillars of ethics and transparency. 
        For this reason, we have professionalized our company's management processes over the years, 
        implementing best practices in terms of corporate governance in order to guarantee the sustained growth and consolidation of our business. `
    },
    {
        "id": "Jackson",
        "lat": 45.48091636921775,
        "long": -123.0165465995866,
        "title": "Jackson Family Winery",
        "url": "https://www.jacksonfamilywines.com/",
        "src": "image/jackson.jpg",
        "info": `We see possibility in a handful of earth. 
        We've been family-owned and family-run since we planted our first vine in 1974.
        While our family of winegrowers has expanded over the years, one thing that has not changed is our family culture. 
        Wine is our passion, and from this passion comes our multigenerational vision to grow wines of distinction, do business ethically and empower our people.`
    },
    {
        "id": "Garagista",
        "lat": 43.754333880188014, 
        "long": -72.66279036138101,
        "title": "La Garagista Farm and Winery",
        "url": "https://www.lagaragista.com/lamontanuela",
        "src": "image/garagista.jpg",
        "info": `La Montañuela was the name of my grandfather's farm in the mountains outside of Caracas, Venezuela. 
        I spent some time there as a child and those are some of my fondest memories. 
        I believe it's where my love for plants and nature began.
        I made my first three wines in the fall of 2018. That following spring my grandfather passed away. 
        In honor of his life and his love for the land, I decided to carry on the name of his beloved farm. 
        In 2019 La Montañuela was reborn.`
    },
    {
        "id": "Southbrook",
        "lat": 43.19015370436554, 
        "long": -79.16132145396422,
        "title": "Southbrook Organic Wine",
        "url": "https://www.southbrook.com/",
        "src": "image/southbrook.png",
        "info": `All of Southbrook’s wines are vegan-friendly. 
        Part of their organic/biodynamic winemaking means they rely on indigenous yeast 
        (naturally present on grape skins) for fermentation of their red wines.
        Southbrook's motto is “Better vines, better wines, better world,” and they call themselves “Canada's most thoughtful winery.”`
    }
]

for (let i = 0; i < locations.length; i++){
    new L.Marker([locations[i].lat, locations[i].long]).addTo(map)
}

locations.forEach(location => {
    let marker = new L.Marker([location.lat, location.long]).addTo(map);
    marker.on("click", event => {
        event.target.bindPopup(`
            <div class="card">
            <h3>${location.title}</h3>
            <img src="${location.src}" alt="${location.title}">
            <p>${location.info}</p>
            <button class="${location.id}wineButton">Wine</button>
            <button class="contactButton" onclick="window.location.href='${location.url}'">Website</button>
            </div>
            `).openPopup();
        // Add a click listener to the document to close the popup when you click outside the box
        document.addEventListener("click", closePopup);
        // Prevent the click event from propagating to other elements
        event.stopPropagation();
    });
});
//Make this function to open the wineButton.southbrook etc. Target winelist in specific group.
//Create a list of wine?

function closePopup(event) {
let popup = document.querySelector(".leaflet-popup-content");
if (!popup.contains(event.target)) {
    popup.style.display = "none";
    // Remove the click listener from the document
    document.removeEventListener("click", closePopup);
    }
}

//Create function for search button to run through locations content.
/*
https://www.digitalocean.com/community/tutorials/js-array-search-methods
*/

//POPUP for WINE-LIST:
/*
https://www.w3schools.com/howto/howto_js_popup.asp
*/

