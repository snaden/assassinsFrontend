$(document).ready(function() {
    //redirect to login
    document.location='./login.html';

    //display help message if there is a problem
    setTimeout(function(){
        $("#index-time-out").css("display","block");
    }, 5000);

});
