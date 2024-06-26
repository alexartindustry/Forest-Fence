$(document).ready(function(){

    $('.service').on('click', function(e) {
        e.preventDefault();
        $(this).closest('form').find('.service').removeClass('active');
        $(this).addClass('active');
        $('#request-service').val($(this).attr('type'));
    });

});