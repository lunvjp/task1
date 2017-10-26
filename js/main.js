$(function () {
    /* SLICK */
    $('.autoslider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    /*END SLICK */

    /* PARALLAX */

    // $('section#bazaar').parallax({imageSrc: 'images/bazaar.png'});
    // $('section#book').parallax({imageSrc: 'images/book2.0.jpg'});
    // $('section#novel').parallax({imageSrc: 'images/novel.jpg'});


    // $(window).resize(function() {
    //     $('section#bazaar').parallax({imageSrc: 'images/bazaar.png'});
    //     // var image_slider = $(".image-slider");
    //
    // });


    /* AUTO SLIDER IMAGE FOR MOBILE */



    /* END */
    // $('#home').parallax("50%", 0.9);
    // $('#book').parallax("10%", 0.4);
    // $('#novel').parallax("100%", 0.5);
    // $('#bazaar').parallax("50%", 0.4);
    /* END PARALLAX */

    /* ZOOM IMAGE */

    /* END ZOOM IMAGE */

    /* INSIDE LINK */
    $("button.circle").click(function() {
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 2000);
    });
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('header .sidebar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 2000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    /* END INSIDE LINK */

    /* LINK REMOVE LINK HREF */

    /* #END REMOVE LINK HREF */
    $( "#speed" ).selectmenu();

    new WOW().init();



    $("a[href='#menu1'], #tab-menu1, #character").click(function(){
        $('#menu2').hide();
        $('#menu1').show(700);
    });
    $("a[href='#menu2'], #tab-menu2, #artwork").click(function(){
        $('#menu1').hide();
        $('#menu2').show(700);
    });



    /* FILTER OPTION */

    /* END FILTER OPTION */
    /* Mỗi lần resize là xóa hết các fixed div đi sau đó parallax lại  */


    // Init Skrollr
    // var s = skrollr.init({
    //     forceHeight: false
    // });
    //
    // // Refresh Skrollr after resizing our sections
    // // s.refresh($('.homeSlide'));


    $("[data-fancybox]").fancybox({
        protect: true,
        slideClass : 'watermark',
        animationEffect : "fade",
        thumbs : {
            autoStart : true
        }
    });
    /* ZOOM IMAGE */


    /* */
});
/* END $(function(){}); */


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('header .sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('header .sidebar a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}