document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("button").addEventListener("click", function() {

        const spam = document.getElementById("spam");
        button.style.transition = "2s";
        button.style.opacity = "0%";
        spam.style.transition = "2s";
        spam.style.opacity = "100%";
        
        var timeLeft = 5;
        var rating = 40;
        
        var timerId = setInterval(countdown, 100);
    
        function countdown() {
            if (timeLeft < 0) {
                clearTimeout(timerId);
                document.getElementById("Countdown").innerHTML = 'bruh';
            } else {
                document.getElementById("spam").addEventListener("click", function() {
                    if (rating < 48) {
                    rating += 0.3; 
                }
                });
                console.log(timeLeft+' seconds remaining');
                timeLeft -= 0.1;
                rating /= 1.2;
                document.getElementById("Countdown").innerHTML = 'Time left ' + Math.ceil(timeLeft);
                var ratingend = rating / 10 + 1;
                document.getElementById("rat").innerHTML = ratingend.toFixed(2);
            }
        }

    });

});