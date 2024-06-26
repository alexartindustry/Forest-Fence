$(document).ready(function(){
    /*questions begin*/
    $('.quest').on('click', function(e) {

        $('.active-question').each(function() {
            $(this).parent('.question').find('.answer-text').slideToggle();

            $(this).removeClass('active-question');
        });

        $(this).addClass('active-question');
        $(this).parent('.question').find('.answer-text').slideToggle();
    });
    /*questions end*/
});