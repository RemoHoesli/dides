document.addEventListener('DOMContentLoaded', function () {

    /*Get current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    document.getElementById("clock").innerHTML = hours +":"+ minutes;
    */
    
    var ratingend;
    var ratingfinal; 
    var first = 1.0; 
    var second = 1.0;
    var third = 1.0;
    document.getElementById("first").innerHTML = '1) '+first.toFixed(2);
    document.getElementById("second").innerHTML = '2) '+second.toFixed(2);
    document.getElementById("third").innerHTML = '3) '+third.toFixed(2);

    document.getElementById("button").addEventListener("click", function() {

        const spam = document.getElementById("spam");

        button.style.transform = "translateX(100vw)";
        spam.style.transform = "translateX(0vw)";

        var timeLeft = 10;
        var rating = 0;        
        
        
        var timerId = setInterval(countdown, 50);
    
        function countdown() {
            if (timeLeft < 0) {
                clearTimeout(timerId);
                document.getElementById("Countdown").innerHTML = 'inspirational quote';
                button.style.transform = "translateX(0vw)";
                spam.style.transform = "translateX(100vw)";

                ratingfinal = ratingend;
                if (ratingfinal > first) {
                    third = second; second = first; first = ratingfinal; 
                } else if (ratingfinal > second) {
                    third = second; second = ratingfinal;
                } else if (ratingfinal > third) {
                    third = ratingfinal;
                }
                document.getElementById("rat").innerHTML = ratingend.toFixed(2);
                document.getElementById("first").innerHTML = '1) '+first.toFixed(2);
                document.getElementById("second").innerHTML = '2) '+second.toFixed(2);
                document.getElementById("third").innerHTML = '3) '+third.toFixed(2);
            } else {
                document.getElementById("spam").addEventListener("click", function() {
                    if (rating < 50) {
                    rating += 0.05; 
                }
                });
                console.log(timeLeft+' seconds remaining');
                timeLeft -= 0.05;
                rating *= 0.95;
                document.getElementById("Countdown").innerHTML = 'Time left ' + Math.ceil(timeLeft);
                ratingend = rating / 10 + 1;
                document.getElementById("rat").innerHTML = ratingend.toFixed(1);
            }
        }

        

    });

});