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

    _clearErrorMessage("login-error-msg");

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
                    // alert(data.status);
                    _displayErrorMessage(data.status, "login-error-msg");
                }
            },
            error: function () {
                localStorage.removeItem("user");
                localStorage.removeItem("user_id");
                _displayErrorMessage("Unable to login at this time. Check your network connection.","login-error-msg");
            }
        });

        event.preventDefault();
    });

    $("#new_user").click(function(){
        console.log(document.getElementsByTagName('*').length);
        var popup = document.createElement('div');
        popup.className = 'text instructions';
        var message = document.createElement('span');
        message.innerHTML = "Please talk to a developer (snaden@macalester.edu, rgold@macalester.edu, zwang@macalester.edu, yli2@macalester.edu) about creating your own account.  In the meantime, feel free to use any of these username/password combos to check out the app:<br>u1/p1, u2/p2, ... u9/p9";
        popup.appendChild(message);
        if(document.getElementsByTagName('*').length<=21){
            $("#new_user_div").append(popup);

        }
        
    });

});
