$( document ).ready(function() {
    $('.glyphContainer').click(function(){
        $('.mySidebar').fadeToggle('fast');
        $('.down').toggle();
        $('.up').toggle();
         
    });
});