var box = document.querySelector('#box');
var previews = document.querySelectorAll('#previews');


box.addEventListener('mouseover', function() {
    previews.play()
})


box.addEventListener('mouseover', function() {
            previews.pause();
        }