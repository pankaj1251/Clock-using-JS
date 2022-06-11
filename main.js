setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currDate = new Date();
  const secRatio = currDate.getSeconds() / 60;
  const minuteRatio = (secRatio + currDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currDate.getHours()) / 12;

  setRotation(secondHand, secRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
