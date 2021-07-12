
const API_KEY = "23d5d45ac18afdb04597e254eb9eb51c";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => response.json()).then(data => {console.log(data.name, date.weather[0].main)});
}

function onGeoError() {
    alert("can't find you. no weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);