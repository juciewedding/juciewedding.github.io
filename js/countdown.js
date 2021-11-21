// Set the date we're counting down to
var countDownDate = new Date(2022, 7, 27, 13, 0, 0, 0).getTime();

// Update the count down every 1 second
var x = setInterval(function countdown() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    } else {
        days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    // Display the result in the element with id="demo"
    var countdownEl = document.getElementById("ct-days")
    countdownEl.innerHTML = days

    countdownEl = document.getElementById("ct-hours")
    countdownEl.innerHTML = hours

    countdownEl = document.getElementById("ct-minutes")
    countdownEl.innerHTML = minutes

    countdownEl = document.getElementById("ct-seconds")
    countdownEl.innerHTML = seconds


    return countdown;
}(), 1000);