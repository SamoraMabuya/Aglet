var previews = document.querySelector('#video1');


previews.addEventListener("mouseover", function() {
    this.play();
    console.log('play');
})