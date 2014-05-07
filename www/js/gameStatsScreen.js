$(document).ready(function () {

    var cleanUp = function () {
        //cleaning up before redirect
        localStorage.removeItem("game");
        localStorage.removeItem("target_name");
    };

    var handle_error = function (ex) {
        //TODO: decide how to handle errors
//    console.log(ex);
        cleanUp();
        document.location = './selectgamescreen.html';
    };

    // getting ready to find status
    // example: http://localhost:8080/api/game_player_status?username=u1&game_id=4925812092436480
    var game_id = localStorage.getItem("game");
    var user = localStorage.getItem("user");
    var target_name = localStorage.getItem("target_name");
    if (user == null || game_id == null) { //user does exist!
        var msg = "No username or game_id on the page";
        handle_error(msg);
    }

    //requesting game
    var game_url = _app_base + "/api/games/" + game_id;
    $.getJSON(game_url, function (response) {
        if (response["success"]) {
            // var gameInfo = response["info"]["survivors"];
            // updateGameInfo(gameInfo);
            var gameTitle = response["info"]["title"];
            setTitle(gameTitle);
        } else { // no such game
            var msg = "Variable game_id on page, but no id in the database";
            handle_error(msg);
        }
    }).fail(function () {
        var msg = "Variable game_id on page, but requesting server failed";
        handle_error(msg);
    });

    //requesting game player status
    var request_data = {username: user, game_id: game_id};
    var request_url = _app_base + "/api/game_player_status";
    $.getJSON(request_url, request_data, function (response) {
        var player_status = response;
        console.log(player_status);
        if (response["in_game"]) { //user is a part of game
            if (response["game_completed"]) {
                if (response["winner_name"] == localStorage.getItem("user")) {
                    $(".text.label.target").html('<SPAN class="text headline" id="target">Congratz, Ultimate Murderer!</SPAN>');
                } else {
                    $(".text.label.target").html('<SPAN class="text headline" id="target">' + response["winner_name"] + ' is the boss, not you!</SPAN>');
                }
                $('#kill-verification').css("display", "none");
                $(".mascot").css("display", "none");
            } else {
                if (response["target"] != null) {
                    updateTargetInfo(response["target"]);
                    updateKillCode(response["msg"]);
                } else { //user is dead
                    var images = ['<img  height="150" src="img/dead1.png" />',
                        '<img height="150" src="img/dead2.png" />',
                        '<img height="150" src="img/dead3.png" />',
                        '<img height="150" src="img/dead4.png" />'];
                    var image = images[Math.floor(Math.random() * images.length)];
                    $("#game-status-dead").css("display", "block");
                    $('#kill-verification').css("display", "none");
                    $('#game-status-dead').prepend(image);
                    $("#game-status-alive").css("display", "none");
                }
            }

        } else { //user was never in game, this shouldn't happen
            alert("You're not in this game!");
            document.location = './selectGameScreen.html';
        }
    });

    // var updateGameInfo = function(gameInfo){
    //   $("#survivors").text(gameInfo);
    // };

    var setTitle = function (title) {
        $("#GameTitle").text(title);
    };

    var updateTargetInfo = function (targetName) {
        //Update username on display
        $("#target").text(targetName);
        localStorage.setItem("target", targetName)
    };

    var updateKillCode = function (killCode) {
        $('#kill-code').text(killCode);
    };

    $("#killer-mascot").on("click", function () {
        $("#verify-kill").toggle("fast");
    });

    $("#i-died").on("click", function () {
        $("#display-kill-code").toggle("fast");
    });

  $("#verify-kill-form").submit(function(event){
      var killCode = $("#killCode").val();
      var kill_url = _app_base + "api/kill";
      var kill_data = JSON.stringify({game_id: game_id, username: user, msg: killCode});
      console.log(kill_data);
      $.ajax({
          url: kill_url,
          type: "POST",
          data: kill_data,
          contentType:'application/json; charset=UTF-8',
          dataType: 'json',
          success: function(response) {
              if (response.success) {
                  location.reload()
                  alert("nice kill")
              } else {
                  alert(response.info);
              }
          },
          error: function () {
              console.log("Something's fundamentally wrong");
          }
      });
      event.preventDefault();
  });

    $("#game_select_redirect").on("click", function () {
        cleanUp();
    });

});