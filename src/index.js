function updateTimeAngeles() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>] "
    );
  }
}
setInterval(updateTimeAngeles, 1000);

function updateTimeSydney() {
  let sydneyElement = document.querySelector("#sydney");

  let sydneyDateElement = sydneyElement.querySelector("#sydney-date");
  let sydneyTimeElement = sydneyElement.querySelector("#sydney-time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>] "
  );
}
setInterval(updateTimeSydney, 1000);
let townSelectElement = document.querySelector("#form");
townSelectElement.addEventListener("change", updateCity);
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let townName = cityTimeZone.replace("_", " ").split("/")[1];
  let townTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#towns");
  citiesElement.innerHTML = ` <div class="city">
  <h2>${townName}</h2>
          <div class="time">${townTime.format(
            "h:mm:ss"
          )} <small>${townTime.format("A")}</small></div>
          <div class="date">${townTime.format("MMMM	Do YYYY")}</div> 
          <a href="/" class="link">All cities</a>`;
}
