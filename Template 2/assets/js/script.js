

$(".material-icons").on('click', () =>{
    if (!$('.jumbotron').hasClass("expanded")){
       $('.jumbotron').animate({height: '50%',}, 2000);
       $('.jumbotron').addClass("expanded");

       $(".main-content").toggleClass("hide", 2000);
    }
    else {
       $('.jumbotron').animate({height: '100%',}, 2000);
       $('.jumbotron').removeClass("expanded");
       $(".main-content").toggleClass("hide", 2000);
    }

 });