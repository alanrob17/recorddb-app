$(document).ready(function () {
    $('#biography').hide();
    $('#biographyButton').click(function () {
        if ($('#biography').is(':visible')) {
            $('#biography').hide();
        } else {
            $('#biography').show();
        }
    });

    $('#review').hide();
    $('#showButton').click(function () {
        if ($('#review').is(':visible')) {
            $('#review').hide();
        } else {
            $('#review').show();
        }
    });
});
