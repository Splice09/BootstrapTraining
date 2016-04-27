$( document ).ready(function() {
    $('#myModal').modal({ show: false})
    $('#sendButton').click(function(){
        $('#myModal').modal('show');
    });
});