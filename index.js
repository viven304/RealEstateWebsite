$(function() {

    $('.photoToEnlarge').hide();
    $('#sqr').hide();

    $('.photoToDisplay').on('mouseover', function() {
        let photoId = $(this).attr('data-photoId');
        $('#' + photoId).animate({
            opacity: '-=0.5'
        });
    });

    $('.photoToDisplay').on('mouseleave', function() {
        let photoId = $(this).attr('data-photoId');
        $('#' + photoId).animate({
            opacity: '+=0.5'
        });
    });

    $('.photoToDisplay').on('click', function() {
        let photoHiddenId = $(this).attr('data-photoHiddenId');
        $('#' + photoHiddenId).show();
        $('#sqr').show();
    });

    $('#sqr').on('click', function() {
        let photoHiddenId = $(this).attr('data-photoHiddenClass');
        $('.' + photoHiddenId).hide();
        $('#sqr').hide();
    });



});