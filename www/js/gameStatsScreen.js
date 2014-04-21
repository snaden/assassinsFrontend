$(document).ready(function() {
  // $.ajax({url:"http://localhost:8080/api/game_info?game_id=4925812092436480",success:function(result){
  //   console.log(result['info'].num_player)
  //   var popup = document.createElement('div');
  //   popup.className = 'text instructions';
  //   var message = document.createElement('span');
  //   message.innerHTML = result['info'].num_player;
  //   popup.appendChild(message);
  //   document.getElementById("info").appendChild(popup);
  // }});

  var cleanUp = function(){ 
    //cleaning up before redirect
    localStorage.removeItem("game");
  };

  var handle_error = function(ex){
    //TODO: decide how to handle errors
    console.log(ex);
    cleanUp();
    document.location='./selectgamescreen.html';
  };

  // getting ready to find status
  // example: http://localhost:8080/api/game_player_status?username=u1&game_id=4925812092436480
  var game_id = localStorage.getItem("game");
  var user = localStorage.getItem("user");
  console.log(game_id);
  console.log(user);
  if(user == null || game_id == null){ //user does exist!
    var msg = "No username or game_id on the page";
    handle_error(msg);
  } 

  //requesting game
  var game_url = _app_base+"/api/games/" + game_id;
  $.getJSON(game_url, function(response){
    console.log(response);
    if(response["success"]){
      var gameInfo = response["info"]["survivors"];
      // updateGameInfo(gameInfo);
    } else { // no such game
      var msg = "Variable game_id on page, but no id in the database";
      handle_error(msg);
    }
  }).fail(function(){
    var msg = "Variable game_id on page, but requesting server failed";
  handle_error(msg);
  });

  //requesting game player status
  var request_data = {username: user, game_id:game_id};
  var request_url = _app_base+"/api/game_player_status";
  $.getJSON(request_url, request_data, function(response){
     var player_status = response;
     console.log(player_status);
     if(response["in_game"]){
        updateTargetInfo(response["target"]);
        updateKillCode(response["msg"]);
     }else{
      var images = ['<img  height="150" src="img/dead1.png" />',
      '<img height="150" src="img/dead2.png" />',
      '<img height="150" src="img/dead3.png" />',
      '<img height="150" src="img/dead4.png" />'];
      var image = images[Math.floor(Math.random() * images.length)];
        $("#game-status-dead").css("display","block");
        $('#kill-verification').css("display", "none")
        $('#game-status-dead').prepend(image);
        $("#game-status-alive").css("display","none");
     }
  });

  // var updateGameInfo = function(gameInfo){
  //   $("#survivors").text(gameInfo);
  // };

  var updateTargetInfo = function(targetName){
    //Update username on display
    $("#target").text(targetName);
  };

  var updateKillCode = function(killCode){
    $('#kill-code').text(killCode);
  }

  $("#killer-mascot").on("click",function(){
      $("#verify-kill").toggle("fast");
  });

  $("#i-died").on("click", function(){
     $("#display-kill-code").toggle("fast");
  });

  $("#verify-kill-form").submit(function(event){
      var killCode = $("#kill-code").val();
      $.post(_app_base+"/api/kill", 
        JSON.stringify({game_id: game_id, username: targetName, msg: killCode}), 
        function(response){
         alert("API call is success!"); 
      });
  })

  $("#game_select_redirect").on("click",function(){
    cleanUp();
  });

});