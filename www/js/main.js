$(document).ready(function() {
    $("#loginForm").submit(function(event) {
        var $form = $(this);
        var u = $("#username").val();
        var p = $("#password").val();

        $.ajax({
            url : "http://localhost:8080/rest_login",
            type: "POST",
            data : {username: u, password: p},
            contentType:'application/json; charset=UTF-8',
            dataType: 'json',
            success: function(data) {
                if (data.status === true) {
                    document.location='http://www.epa.gov/';
                } else {
                    alert(data.status);
                }
            },
            error: function () {
                console.log("Something's fundamentally wrong");
            }
        });

        event.preventDefault();
    });

});



//function init()   {
//    document.addEventListener("deviceready", deviceReady, true);
//    delete init;
//}