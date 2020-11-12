    var previews = document.querySelector('#video1');


    playvideo();

    function playvideo() {

        previews.addEventListener("mouseover", function() {
            this.play();
        })
    }