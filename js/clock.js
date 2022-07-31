const clockTitle = document.querySelector(".clock");

function timer(){
    const today = new Date();
    const hours = String(today.getHours()).padStart(2,"0");
    const minutes = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    clockTitle.querySelector(".hours").innerText = hours;
    clockTitle.querySelector(".minutes").innerText = minutes;
    clockTitle.querySelector(".seconds").innerText = seconds;    
}

timer();
setInterval(timer,1000);