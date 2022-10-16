console.log(new Date());
let now = new Date();
console.log(now.getMilliseconds());
let days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
let day = days[now.getDay()];
console.log(day);
console.log(now.getFullYear());
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
console.log(month);
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let mins = now.getMinutes();

let showTime = document.querySelector("h6");
console.log(showTime);

showTime.innerHTML = `${month} ${date} ${year}, ${hours}:${mins} `;

let clickme = document.querySelector("form");
console.log(clickme);

clickme.addEventListener("submit", citysearch);

function citysearch(event) {
  event.preventDefault();
  let newName = document.querySelector("#placeinput").value;
  //let newline = document.querySelector("h2");
  console.log(newName);
  //newline.innerHTML = `It is 18° in ${newName} today`;
  let apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${newName}&units=metric`;
  axios.get(`${api}&appid=${apiKey}`).then(showData);
}

//let newSearch= "berlin"
//let apiKey= "9e0fb79c2f66d0cd0dcf06710976a873";
//let api = `https://api.openweathermap.org/data/2.5/weather?q=${newSearch}&units=metric`;

//axios.get(`${api}&appid=${apiKey}`).then(showData);

function showData(response) {
  let nameplace = response.data.name;
  console.log(nameplace);

  let tempofcity = Math.round(response.data.main.temp);
  console.log("tempofcity", tempofcity);

  //if(city==="paris") {alert("It is current " + weather[0].temp + " degrees in " + city + " with a humidity of " + weather[0].humidity + "%")}
  let emoji = "🥶";
  if (tempofcity >= 17) {
    emoji = "🥵";
  }

  let searchsentence = document.querySelector("h2");
  searchsentence.innerHTML = `${emoji} It is ${tempofcity}° C in ${nameplace} right now.`;

  let maxtempofcity = Math.round(response.data.main.temp_max);
  console.log(maxtempofcity);
  let subsmax = document.querySelector("#high");
  subsmax.innerHTML = `⬆️ High: ${maxtempofcity}° C`;

  let mintempofcity = Math.round(response.data.main.temp_min);
  console.log(mintempofcity);
  let subsmin = document.querySelector("#low");
  subsmin.innerHTML = `⬇️ Low: ${mintempofcity}° C`;

  let feelslike = Math.round(response.data.main.feels_like);
  console.log(feelslike);
  let subsfeels = document.querySelector("#feels");
  subsfeels.innerHTML = `🤐 Feels Like: ${feelslike}° C`;

  let windSpeed = Math.round(response.data.wind.speed);
  console.log(windSpeed);
  let subswind = document.querySelector("#wind");
  console.log(subswind);
  subswind.innerHTML = `🌬️ Wind Speed: ${windSpeed} Km/h`;

  let des = response.data.weather[0].description;
  console.log(des);
  let subdes = document.querySelector("#description");
  subdes.innerHTML = `Description:${des}`;
}
