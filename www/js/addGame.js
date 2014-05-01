$(document).ready(function () {

    //Check whether the user is there
    var user = localStorage.getItem("user");
    if (user == null) { //user does not exist, bad!
        document.location = './selectGameScreen.html';
    }

    //Getting all the users
    var request_url = _app_base + "/api/users";

    $.getJSON(request_url, function (response) {
        var users = response;
        $.each(users, function () {
            if (this["player_id"] != localStorage.getItem("user_id")) {
                var userItem = $("<div>", {class: "checkList", text: this["username"]});
                $("#user_check_list").append(userItem);
            }
        });
        toggleHighlight();
    });

    var toggleHighlight = function () {
        $(".checkList").on("click", function () {
            $(this).toggleClass("highlight");
        })
    };

    //Handles saving game
    $("#add_game_form").submit(function (e) {
        var gameName = $("#game_name").val(); //input for title param of API
        var selectedUsers = [localStorage.getItem("user")]; //input for players param of API
        $(".highlight").each(function () {
            selectedUsers.push($(this).text())
        });
        var gameInfoData = {'title': gameName, 'players': selectedUsers};
        if (selectedUsers.length > 1) {
            addGameWithInfo(gameInfoData);
        } else {
            console.log("Please add a player to play with you. ");
        }
        e.preventDefault();
    });



    var addGameWithInfo = function (gameInfo) {
        if (gameInfo.title == "") //make sure we have a name
            alert("Please enter a name for the game");
        var addGameUrl = _app_base + "/api/games";
        $.ajax({
            url: addGameUrl,
            type: "POST",
            data: JSON.stringify(gameInfo),
            contentType: 'application/json; charset=UTF-8',
            dataType: 'json',
            success: function (data) {
                if (data.success === true) {
                    //redirect back to selectGameScreen
                    document.location = './selectGameScreen.html';
                } else {
                    alert("Unable to create game at this time");
                }
            },
            error: function () {
                console.log("Something's fundamentally wrong");
            }
        });
    };

    $("#cancel_add_game").on("click", function (e) {
        //Clear Up
    });

});
