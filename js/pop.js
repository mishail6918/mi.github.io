'use strict';

$(document).ready(function(){
    $('.i1').click(function(){
        $('.i1').removeClass('disp');
        $('.btn').removeClass('btn');
        $('.img').css({cursor: "auto"});
    });
    $('.i2').click(function(){
        $('.i2').removeClass('disp');
        $('.btn').removeClass('btn');
        $('.img').css({cursor: "auto"});
    }); 
    $('.i3').click(function(){
        $('.i3').removeClass('disp');
        $('.btn').removeClass('btn');
        $('.img').css({cursor: "auto"});
    });
    $('.i4').click(function(){
        $('.i4').removeClass('disp');
        $('.btn').removeClass('btn');
        $('.img').css({cursor: "auto"});
    });

    //Закрываем большую картинку
    $('.btn-disp').click(function(){
        if ($('.big-img').hasClass('disp')) {
            $('.big-img').addClass('disp');
            $('.btn-disp').addClass('btn');
            $('.img').css({cursor: "pointer"});
        }
    });
});
