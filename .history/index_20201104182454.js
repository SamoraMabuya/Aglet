var previews = document.querySelector('#previewOne');
var box = document.querySelectorAll('.box');



// function Play() {
//     previews.play();

// }

// function Pause() {}
previews.addEventListener("mouseover", function() {
    this.play();
});

previews.addEventListener("mouseout", function() {
    previews.pause();
});

// previews.addEventListener("mouseleave", function() {
//     previews.pause();
// });