$(function () {
    $('.receptaMenuButton').on('click', function () {
        var gran = $(this).attr('data-menuId');
        var germans = $('#' + gran).siblings();
        var imatge = $('.' + gran + "Imatges");
        // ensenya el text que correspon a receptaMenuButton onClick i amaga els altres
        $('#' + gran).removeClass('hidden');
        germans.addClass('hidden');
        imatge.removeClass('hidden');
        imatge.siblings().addClass('hidden');
        // posa el subratllat al receptaMenuButton onClick i treu el subratllat de les altres
        $(this).addClass('subLine');
        $(this).parent().siblings().children().removeClass('subLine');
    });
    // cambia d'imatge
    $('.imatgeButton').on('click', function () {
        var actiu = $(this).attr('data-imatgeId');
        var direccio = "url(imatges/WOK-verdures-porc/" + actiu + ".JPG)";
        $('.imatgeActiva').css("background-image", direccio);
        $(this).removeClass('imatgeButton');
        $(this).addClass('orangeButton');
        $(this).parent().siblings().children().addClass('imatgeButton');
        $(this).parent().siblings().children().removeClass('orangeButton');
    });
    $('.receptaMenuButton').on('click', function () {
        var group = $(this).attr('data-menuId');
        var groupClass = ('.' + group + 'Imatges li');
        var contador = $(groupClass).size();
        var amplitut = $(window).width();
        var margin = ((amplitut / 2) - (40 * contador) - (25 * contador) - 25) / 2;
        $('.imatgesMenu').css({
            'margin-left': margin,
            'margin-right': (margin - 25)
        });
    });
    $(document).ready(function () {
        var contador = $('.presentacioImatges').size();
        var amplitut = $(window).width();
        var margin = ((amplitut / 2) - (40 * contador) - (25 * contador) - 25) / 2;
        $('.imatgesMenu').css({
            'margin-left': margin,
            'margin-right': (margin - 25)
        });
        $('.receptaImatge ul li:first-child button').addClass('orangeButton');
    });
});
