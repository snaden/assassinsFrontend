$(document).ready(function() {
    $("#loginForm").submit(function(event) {

        var u = $("#username").val();
        var p = $("#password").val();

        $.ajax({
            url : "http://localhost:8080/api/rest_login",
            type: "POST",
            data : JSON.stringify({username: u, password: p}),
            contentType:'application/json; charset=UTF-8',
            dataType: 'json',
            success: function(data) {
                if (data.status === true) {
                    document.location='./selectGameScreen.html';
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