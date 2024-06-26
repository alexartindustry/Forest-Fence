$(document).ready(function(){

    $('.click-play-block, .watch-video').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.video-section').find('video').get(0).play();
        $(this).closest('.video-section').find('video').attr('controls', true);
        $('.click-play-block').css('display','none');

    });

});