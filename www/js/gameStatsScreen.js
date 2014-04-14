$(document).ready(function() {
  var cleanUp = function(){ 
    //cleaning up before redirect
    localStorage.removeItem("game");

  }

	var handle_error = function(ex){
		//TODO: decide how to handle errors
	  console.log(ex);
  	cleanUp();
  	document.location='./selectgamescreen.html';
	}

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
 	var game_url = _app_base+"/api/game_info";
 	$.getJSON(game_url, {game_id:game_id}, function(response){
 		console.log(response);
 		if(response["success"]){
 			gameInfo = response["info"];
 			updateGameInfo(gameInfo)
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
     }else{
     		$("#game-status-dead").css("display","block");
     		$("#game-status-alive").css("display","none");
     }
  });

  var updateGameInfo = function(gameInfo){
  	//TODO: Implement here to update gameInfo
  }

  var updateTargetInfo = function(targetName){
  	//Update username on display
  	$("#target").text(targetName);


  }

  $("#game_select_redirect").on("click",function(){
  	cleanUp();
  });
});