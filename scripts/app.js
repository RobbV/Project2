/*Robbert Van der Grift
Student#: 200326832
Date: 19/04/2016
================================================================*/
// DOM READY
$(function() {
    // functions to switch out the file path to the correct colour that the user chooses
    // black
    $('#black').click(function() {
        $('#main_img').attr('src', 'images/black/Evolv-ATX-1.jpg');
        $('#thumb1').attr('src', 'images/black/Evolv-ATX-1.jpg');
        $('#thumb2').attr('src', 'images/black/Evolv-ATX-2.jpg');
        $('#thumb3').attr('src', 'images/black/Evolv-ATX-3.jpg');
        $('#thumb4').attr('src', 'images/black/Evolv-ATX-4.jpg');
    });
    // grey
    $('#grey').click(function() {
        $('#main_img').attr('src', 'images/grey/Evolv-ATX-1.jpg');
        $('#thumb1').attr('src', 'images/grey/Evolv-ATX-1.jpg');
        $('#thumb2').attr('src', 'images/grey/Evolv-ATX-2.jpg');
        $('#thumb3').attr('src', 'images/grey/Evolv-ATX-3.jpg');
        $('#thumb4').attr('src', 'images/grey/Evolv-ATX-4.jpg');
    });
    // white
    $('#white').click(function() {
        $('#main_img').attr('src', 'images/white/Evolv-ATX-1.jpg');
        $('#thumb1').attr('src', 'images/white/Evolv-ATX-1.jpg');
        $('#thumb2').attr('src', 'images/white/Evolv-ATX-2.jpg');
        $('#thumb3').attr('src', 'images/white/Evolv-ATX-3.jpg');
        $('#thumb4').attr('src', 'images/white/Evolv-ATX-4.jpg');
    });
    // functions to fade in the correct content to the info div
    // specs
    $('#specs').click(function() {
        $('#reviews').removeClass('selected');
        $('#ship').removeClass('selected');
        $('#specs').addClass('selected');
        $('.specs').fadeIn(500);
        $('.reviews').fadeOut(0);
        $('.ship').fadeOut(0);
    });
    // reviews
    $('#reviews').click(function() {
        $('#reviews').addClass('selected');
        $('#ship').removeClass('selected');
        $('#specs').removeClass('selected');
        $('.specs').fadeOut(0);
        $('.reviews').fadeIn(500);
        $('.ship').fadeOut(0);
    });
    // shipping
    $('#ship').click(function() {
        $('#reviews').removeClass('selected');
        $('#ship').addClass('selected');
        $('#specs').removeClass('selected');
        $('.specs').fadeOut(0);
        $('.reviews').fadeOut(0);
        $('.ship').fadeIn(500);
    });
}); // end DOM ready
