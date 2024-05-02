document.addEventListener('DOMContentLoaded', function () {

    /* Get current time
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
    document.getElementById("first").innerHTML = first.toFixed(2);
    document.getElementById("second").innerHTML = second.toFixed(2);
    document.getElementById("third").innerHTML = third.toFixed(2);

    document.getElementById("button").addEventListener("click", function() {

        const spam = document.getElementById("spam");

        button.style.transform = "translateX(100vw)";
        spam.style.transform = "translateX(0vw)";

        var timeLeft = 5;
        var rating = 40;        
        
        
        var timerId = setInterval(countdown, 100);
    
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
                document.getElementById("first").innerHTML = first.toFixed(2);
                document.getElementById("second").innerHTML = second.toFixed(2);
                document.getElementById("third").innerHTML = third.toFixed(2);
            } else {
                document.getElementById("spam").addEventListener("click", function() {
                    if (rating < 48) {
                    rating += 0.2; 
                }
                });
                console.log(timeLeft+' seconds remaining');
                timeLeft -= 0.1;
                rating /= 1.2;
                document.getElementById("Countdown").innerHTML = 'Time left ' + Math.ceil(timeLeft);
                ratingend = rating / 10 + 1;
                document.getElementById("rat").innerHTML = ratingend.toFixed(2);
            }
        }

        

    });

});