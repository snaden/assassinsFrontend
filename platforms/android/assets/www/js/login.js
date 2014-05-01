$(document).ready(function() {
    //redirect if the user is already logged in
   var user = localStorage.getItem("user");
   var user_id = localStorage.getItem("user_id");
   if(user != null){ //user does exist!
     document.location='./selectGameScreen.html';
   } 
   if(user_id != null){ //user_id does exist!
     document.location='./selectGameScreen.html';
   } 

    $("#loginForm").submit(function(event) {

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
                    localStorage.setItem("user_id", data.user_id);
                    //Redirect to the selectGameScreen page
                    document.location='./selectGameScreen.html';
                } else {
                    localStorage.removeItem("user");
                    alert(data.status);
                }
            },
            error: function () {
                localStorage.removeItem("user");
                localStorage.removeItem("user_id");
                alert("Something's fundamentally wrong with the server");
            }
        });

        event.preventDefault();
    });

});