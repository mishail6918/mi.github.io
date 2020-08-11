'use strict';
/*$(document).ready(function() {
    function slider() {
        var nextButton = $('.next');
        var prevButton = $('.prev');
        var slideList = $('.reviews-slideshow');
        var revDots = $('.dot-review');
        var activeSlideIndex = 0;

        var isAnimate = false;

        var slideWidth = $('.slide-item').outerWidth(); //Ширина слайда с отступами

        var scrollSlider = slideList.position().left - slideWidth; //Смещение слайдера

        //Next slide click

        nextButton.click(function() {
            if(!slideList.is(':animated')) {
                slideList.animate({left: scrollSlider}, 500, function(){
                    slideList
                        .find('.slide-item:first')
                        .appendTo(slideList)
                        .parent()
                        .css({'left': 0})
                });
            }
            
        });
        
        //Prev button click

        prevButton.click(function(){
            if(!slideList.is(':animated')) {
                slideList
                    .css({'left': scrollSlider})
                    .find('.slide-item:last')
                    .prependTo(slideList)
                    .parent()
                    .animate({left: 0}, 500);
            }
        });
    }
    slider();
});
*/

$(document).ready(function(){
    var slides = $('.slide-item');
    var width = $('.reviews-slideshow').width();
    var count = slides.length;
    var offset = count * width;
    var check = count - 1;

    $('.slide-list').css('width', offset);

    for (var j = 0; j < slides.length; j++) {
        if (j == 0) {
            $('.review-dots').append("<div class='dot-review review-dots-active'></div>");
        }
        else {
            $('.review-dots').append("<div class='dot-review'></div>");
        }
    }

    var revDots = $('.dot-review');
    offset = 0;
    count = 0;

    $('.dot-review').click(function(){
        $('.review-dots-active').removeClass('review-dots-active');
        $(this).addClass('review-dots-active');
        count = $(this).index();
        offset = count * width;
        $('.slide-item').css('transform', 'translate3d(-'+offset+'px, 0px, 0px)');
    });

    $('.next').click(function(){
        if (offset < width * check) {
            offset += width;
            $('.slide-item').css('transform', 'translate3d(-'+offset+'px, 0px, 0px)');
            $('.review-dots-active').removeClass('review-dots-active');
            $(revDots[++count]).addClass('review-dots-active');
        }
    });
    $('.prev').click(function(){
        if (offset > 0) {
            offset -= width;
            $('.slide-item').css('transform', 'translate3d(-'+offset+'px, 0px, 0px)');
            $('.review-dots-active').removeClass('review-dots-active');
            $(revDots[--count]).addClass('review-dots-active');
        }
    });
});
