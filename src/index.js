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
