document.addEventListener('DOMContentLoaded', function () {

    
    var timeLeft = 5;
    const rating = 4.0;
    
        var timerId = setInterval(countdown, 1000);
    
        function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            document.getElementById("Countdown").innerHTML = 'bruh';
        } else {
            console.log(timeLeft+' seconds remaining');
            timeLeft--;
            document.getElementById("Countdown").innerHTML = 'Time left ' + timeLeft;
        }
    }

    document.getElementById("rat").innerHTML = rating;

});