$(window).scroll(function(){


  //var topNumber = $(window).scrollTop();

  var topNumber = Math.floor( $(window).scrollTop()

  );

  //$("#counter3").text(topNumber);

  $("#mountain1").css({
    "top":topNumber * -1.0 +"px"

  });


  $("#mountain2").css({
    "top":topNumber * -0.5 +"px"

  });

  $("#mountain3").css({

    "top":topNumber * 0 +"px"

  });


  //console.log(topNumber);



});
