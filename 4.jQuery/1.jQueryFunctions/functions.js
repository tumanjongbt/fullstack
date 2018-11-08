$(document).ready(function(){

    $('#addClass button').click(function(){
        $('#addClass p').addClass('red');
    });

    $('#toggleClass button').click(function(){
        $('#toggleClass p').slideToggle("slow");
    });

    $('#appendClass button').click(function(){
        $(this).append(" Button");
    });

    $('#hider').click(function(){
        $('#clickClass P').hide( 2000);
    });

    $('#shower').click(function(){
        $('#clickClass P').show( 4000);
    });

    $('#toggleClass').click(function(){
        $('#toggleClass P').toggle();
    });

    $('#slide button').click(function(){
        $('#slide').slideDown();
    });

    $('#slideUpClass button').click(function(){
        $('#slideUpClass p').slideUp();
    });

    $('#beforeClass button').click(function(){
        $('#beforeClass p').before("I knew about JQUERY");
    });

    $('#afterClass button').click(function(){
        $('#afterClass p').after("I knew about JQUERY");
    });

    $('#htmlClass button').click(function(){
        $('#htmlClass p').html("<p>This is hard work</p>");
    });

    $('#textClass button').click(function(){
        $('#textClass H1').text("New TOPIC");
    });

});

