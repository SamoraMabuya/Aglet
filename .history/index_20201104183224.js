var previews = document.querySelector('.previews');
var box = document.querySelectorAll('.box');


function playVideo() {

}
box[0].addEventListener("mouseover", function() {
    previews[0].play();
});

box[0].addEventListener("mouseout", function() {
    previews[0].pause();
});


box[1].addEventListener("mouseover", function() {
    previews[1].play();
});

box[1].addEventListener("mouseout", function() {
    previews[1].pause();
});