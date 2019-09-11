$(function() {

    $('.photoToEnlarge').hide();
    $('#sqr').hide();
    $('#sqr2').hide();

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
        $('#sqr2').hide();
    });

    $('#sqr').on('mousemove', function(e) {

        let percentageInX = e.pageX;
        let percentageInY = e.pageY;

        $("#sqr2").css({
            'left': percentageInX,
            'top': percentageInY

        });
        $("#sqr2").show();

    });
});

