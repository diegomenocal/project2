$(window).scroll(function(){

  var topNumber = $(window).scrollTop();

  var topNumber = Math.floor( $(window).scrollTop() );

  $("#counter").text(topNumber);

  $("#counter").text(topNumber);

 $("#counter").css({

   "color":"white",
   "background-color":"blue",
   "top":30 + topNumber * 0 +"px"

 });

  $("#mountain1").css({"top":topNumber * -1.0 +"px"});

  $("#mountain2").css({"top":topNumber * -0.5 +"px"});

  $("#mountain3").css({"top":topNumber * 0 +"px"});


  if ($(this).scrollTop() > 1000) {
          $(".event").css({"opacity": "1"});
      } else {
          $(".event").css({"opacity": "0"});
      }

  if ($(this).scrollTop() < 10000) {
          $(".event").css({"opacity": "1"});
      } else {
          $(".event").css({"opacity": "0"});
      }

  if ($(this).scrollTop() > 10000) {
          $(".event2").css({"opacity": "1"});
      } else {
          $(".event2").css({"opacity": "0"});
      }

  console.log(topNumber);

});
