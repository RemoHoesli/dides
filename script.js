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

    const pre = document.querySelectorAll('.pre');
    const during = document.querySelectorAll('.during');
    const post = document.querySelectorAll('.post');

    document.getElementById("startbutton").addEventListener("click", function() {

        
        pre.forEach(function(element) {
            element.style.transform = "translateX(100vw)"; });
        during.forEach(function(element) {
            element.style.transform = "translateX(0vw)"; });
        document.getElementById("Countdown").style.opacity = '0%';

        var timeLeft = 13;
        var rating = 0;        
        
        
        var timerId = setInterval(countdown, 50);
    
        function countdown() {
            if (timeLeft < 13) {
                document.getElementById("starttimer").innerHTML = '3';

            }
            if (timeLeft < 12) {
                document.getElementById("starttimer").innerHTML = '2';

            }
            if (timeLeft < 11) {
                document.getElementById("starttimer").innerHTML = '1';

            }
            if (timeLeft < 10) {
                document.getElementById("starttimer").style.transform = 'translatex(100vw)';
                document.getElementById("starttimercircle").style.transform = 'translatex(100vw)';
                document.getElementById("Countdown").style.opacity = '100%';
            }
            if (timeLeft < 0) {
                clearTimeout(timerId);
                if (ratingend > 0) {
                    document.getElementById("quote").innerHTML = '"Lets have a little fun here. You know, screw the planet"';
                }
                if (ratingend > 2.0) {
                    document.getElementById("quote").innerHTML = '"I dont know whats up with you but I cannot have a 2 at my wedding"';
                }
                if (ratingend > 3.0) {
                    document.getElementById("quote").innerHTML = '"Trying to scrape yourself back? If its below that, then its bye bye"';
                }
                if (ratingend > 3.5) {
                    document.getElementById("quote").innerHTML = '"It turned out a lot of my friends didnt care for honesty"';
                }
                if (ratingend > 4.2) {
                    document.getElementById("quote").innerHTML = '"You know our Prime Influencers Programme? Wed need you around a 4.5"';
                }
                if (ratingend > 4.5) {
                    document.getElementById("quote").innerHTML = '"You could use a punch up right there. Thats upvotes from quality people"';
                }     

                during.forEach(function(element) {
                    element.style.transform = "translateX(100vw)"; });
                post.forEach(function(element) {
                    element.style.transform = "translateX(0vw)"; });

                ratingfinal = ratingend;
                if (ratingfinal > first) {
                    third = second; second = first; first = ratingfinal; 
                } else if (ratingfinal > second) {
                    third = second; second = ratingfinal;
                } else if (ratingfinal > third) {
                    third = ratingfinal;
                }
                document.getElementById("yourat").innerHTML = ratingend.toFixed(2);
                document.getElementById("first").innerHTML = '1) '+first.toFixed(2);
                document.getElementById("second").innerHTML = '2) '+second.toFixed(2);
                document.getElementById("third").innerHTML = '3) '+third.toFixed(2);

                document.getElementById("backbutton").addEventListener("click", function() {
                    post.forEach(function(element) {
                        element.style.transform = "translateX(100vw)"; });
                    pre.forEach(function(element) {
                        element.style.transform = "translateX(0vw)"; });
                });
            } else {
                document.getElementById("spam").addEventListener("click", function() {
                    if (ratingend < 4.9) {
                    rating += 0.012; 
                }
                });
                console.log(timeLeft+' seconds remaining');
                timeLeft -= 0.05;
                rating *= 0.98;
                document.getElementById("Countdown").innerHTML = 'Time left: ' + Math.ceil(timeLeft) + 's';
                ratingend = rating / 10 + 1;
                document.getElementById("rat").innerHTML = ratingend.toFixed(1);
            }
        }

        

    });

});