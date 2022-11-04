$(document).ready(function() {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    // $('.menu-Bar,.expand').click(function() {
    //     $(this).toggleClass('open');
    //     $('.menuWrap').toggleClass('open');
    //     $('body').toggleClass('ovr-hiddn');
    //     $('.expandable').toggleClass('open');
        
    // });

    $('.colasebar li span').click(function(){
        $(this).parent('li').find('span').addClass('open');
        $(this).parent('li').addClass('active');
        $(this).parent('li').siblings().find('span').removeClass('open');
        $(this).parent('li').siblings().removeClass('active');
        $(this).parent('li').find('.expandable').slideDown();
        $(this).parent('li').siblings().find('.expandable').slideUp();
    });

    $('.loginUp').click(function(){
        $('#popuprequest').fadeIn();
        $('.overlay').fadeIn();
        var orgtexts = '$39';
        $(".centercont h3").text('Get Custom Logo Design');
      $(".centercont h4").html("In Just <span>" + orgtexts + "</span>");

    });

    $('.bannpack').click(function(){
        $('#popuppack').fadeIn();
        $('.overlay').fadeIn();
        var thisrel = $(this).attr('rel');
        var orgtexts1 = '$39';
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont h3").text('Get Custom Logo Designs');
        $(".centercont h4").html("In Just <span>" + orgtexts1 + "</span>");

    });

    $('.popbtn').click(function(){
        $('#popuppack').fadeIn();
        $('.overlay').fadeIn();
        var packtitle = $(this).closest('li').find(".pkgHead h4").html();
        var packprice = $(this).closest('li').find(".pkgHead h5").html();
        var thisrel = $(this).attr('rel');
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont h3").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });


    $('.specialbtnpack').click(function(){
        $('#popuppack').fadeIn();
        $('.overlay').fadeIn();
        var packtitle1 = $(this).closest('.spacial').find("h2").html();
          var packprice1 = $(this).closest('.spacial').find("h6").html();
        var thisrell = $(this).attr('rel');
        $('#popupform input#popuppackage').val(thisrell);
           $(".centercont h3").html(packtitle1);
          $(".centercont h4").html("In Just <span>" + packprice1 + "</span>");
    });

     $('.closeico,.overlay').click(function(){
        $('#popuprequest').fadeOut();
        $('.overlay').fadeOut();
    });

    $('.closeico1,.overlay').click(function(){
        $('#popuppack').fadeOut();
        $('.overlay').fadeOut();
    });

    (function($){
      $(window).on("load",function(){
        $("ul.pkgDtl").mCustomScrollbar();
      });
    })(jQuery);





    $('.brand-logo').slick({
        slidesToShow:7,
        infinite:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, 
        arrows:false,
        easing:'linear',
        pauseOnHover:true,
        swipeToSlide:true,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow:2,
              }
            }
          ]
    });

    $('.review-list').slick({
        slidesToShow:4,
        infinite:true,
        slidesToScrol1: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows:false,
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
              breakpoint: 768,
              settings: {
                slidesToShow:1,
              }
            }
          ]
    });

     $('[data-targetit]').on('click', function(e) {
      $(this).addClass('current');
      $(this).siblings().removeClass('current');
      var target = $(this).data('targetit');
      $('.' + target).siblings('[class^="box-"]').hide();
      $('.' + target).fadeIn();
    });

    // $('.expand').click(function(){
    //     target_num = $(this).attr('id').split('-')[1];
    //     content_id = '#expandable-'.concat(target_num);
    //     $(content_id).slideToggle('fast');
    // });

    
  
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});
     

$(window).on('load', function() {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function() {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});


/* RESPONSIVE JS */
if ($(window).width() < 824) {


$('.client-list').slick({
        slidesToShow:1,
        infinite:true,
        slidesToScrol1: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows:false,
        centerMode: true,
        variableWidth: true,
        
    });

}
 

setTimeout(function () {
   jQuery('.banner-btn').trigger('click');
}, 4000)




function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $('.topAppendTxt').each(function() {
            var getdtd = $(this).find('.cloneDiv').clone(true);
            $(this).find('.cloneDiv').remove();
            $(this).append(getdtd);
        });
    };
}


