$(function(){
    $('#menu-btn').click(function(){
        $(this).toggleClass('open');
        $('#menu').toggleClass('flex');
        $('#menu').toggleClass('hidden');
    })
})