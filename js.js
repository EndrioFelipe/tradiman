$("#img1").on('click', function() {
   $("#div1").fadeIn();
   $("#div2,#div3,#div4,#div,#div6").fadeOut();
});
$("#img2").on('click', function() {
   $("#div2").fadeIn();
   $("#div1,#div3,#div4,#div5,#div6").fadeOut();
});
$("#img3").on('click', function() {
   $("#div3").fadeIn();
   $("#div1,#div2,#div4,#div5,#div6").fadeOut();
});
$("#img4").on('click', function() {
   $("#div4").fadeIn();
   $("#div1,#div2,#div3,#div5,#div6").fadeOut();
});
$("#img5").on('click', function() {
   $("#div5").fadeIn();
   $("#div1,#div2,#div3,#div4,#div6").fadeOut();
});
$("#img6").on('click', function() {
   $("#div6").fadeIn();
   $("#div1,#div2,#div3,#div4,#div5").fadeOut();
});