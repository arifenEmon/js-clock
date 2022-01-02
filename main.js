let secundHand = document.querySelector('.sec-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
function setDate(){
    let now = new Date();

    let secund = now.getSeconds();
    let secundsDegrees = ((secund / 60) *360) + 90;
    secundHand.style.transform = `rotate(${secundsDegrees}deg)`;

    let min = now.getMinutes();
    let minDegrees = ((min/ 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    let hour = now.getHours();
    let hourDegrees = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);