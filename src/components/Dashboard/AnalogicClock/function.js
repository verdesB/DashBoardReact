export const rotateClock = (hr, min, sec) => {
    const deg = 6;
    const hrElement = document.querySelector('.hr');
    const minElement = document.querySelector('.min');
    const secElement = document.querySelector('.sec'); 
    let secAngle = sec * deg;
    let minAngle = min * deg + secAngle / 60;
    let hrAngle = hr * 30 + minAngle / 12; 

    secElement.style.transform = `rotate(${secAngle}deg)`;
    minElement.style.transform = `rotate(${minAngle}deg)`;
    hrElement.style.transform = `rotate(${hrAngle}deg)`;
}

