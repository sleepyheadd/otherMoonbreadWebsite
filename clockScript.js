setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();

    const curSeconds = currentDate.getSeconds();
    const curMinutes = curSeconds / 60 + currentDate.getMinutes();
    const curHours = curMinutes / 60 + (currentDate.getHours() % 12);

    const secondsRatio = 3 * curSeconds;
    const minutesRatio = 3 * curMinutes;
    const hoursRatio = 15 * curHours;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio);
}

setClock();