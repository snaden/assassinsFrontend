$(document).ready(function() {
    //redirect if the user is already logged in
       var user = localStorage.getItem("user");
       if(user != null){ //user does exist!
         document.location='./selectGameScreen.html';
       } 

    $("#loginForm").submit(function(event) {

        var $form = $(this);
        var u = $("#username").val();
        var p = $("#password").val();

        $.ajax({
            url : _app_base+"/api/rest_login",
            type: "POST",
            data : JSON.stringify({username: u, password: p}),
            contentType:'application/json; charset=UTF-8',
            dataType: 'json',
            success: function(data) {
                if (data.status === true) {
                    //Puting user in localStorage
                    localStorage.setItem("user", u);
                    //Redirect to the selectGameScreen page
                    document.location='./selectGameScreen.html';
                } else {
                    localStorage.removeItem("user");
                    alert(data.status);
                }
            },
            error: function () {
                localStorage.removeItem("user");
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