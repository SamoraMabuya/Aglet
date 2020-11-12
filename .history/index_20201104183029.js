var previews = document.querySelector('#previewOne');
var box = document.querySelectorAll('.box');

box[0].addEventListener("mouseover", function() {
    box.play();
});

box[0].addEventListener("mouseout", function() {
    box.pause();
});


box[1].addEventListener("mouseover", function() {
    box.play();
});

box[1].addEventListener("mouseout", function() {
    box.pause();
});