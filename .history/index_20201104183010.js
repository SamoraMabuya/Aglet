var previews = document.querySelector('#previewOne');
var box = document.querySelectorAll('.box');



// function Play() {
//     previews.play();

// }

// function Pause() {}
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
// previews.addEventListener("mouseleave", function() {
//     previews.pause();
// });