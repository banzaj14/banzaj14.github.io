$(function(){
        $('a[href="#header"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1300);
        // return false;
        });
        });