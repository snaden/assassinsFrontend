$(document).ready(function() {

   //Check whether the user is there
   var user = localStorage.getItem("user");
   // console.log(user);
   if(user == null){ //user does not exist, bad!
     document.location='./selectGameScreen.html';
   } 

   //Getting all the users
   var request_url = _app_base+"/api/users";

   $.getJSON(request_url, function(response){
       var users = response;
       $.each(users, function() {
//           console.log(this["username"]);
           if (this["player_id"] != localStorage.getItem("user_id")) {
               var userItem = $("<div>", {class: "checkList", text: this["username"]});
               $("#user_check_list").append(userItem);
           }
       });
      toggleHighlight();
   });

   var toggleHighlight = function(){ $(".checkList").on("click", function(){
      console.log("things");
      $( this ).toggleClass("highlight");   
   })
 };

   //Handles saving game
   $("#add_game_form").submit(function(e){
		  var gameName = $("#game_name").val(); //input for title param of API
   	  // console.log(gameName);
   		var selectedUsers = []; //input for players param of API
   		$(".highlight").each(function(){
        selectedUsers.push($(this).text())
      });
       selectedUsers.push(localStorage.getItem("user"));
      // seletedUserBoxs.each(function(){
   		// 	if(this.checked)
   		// 		selectedUsers.push($(this).val());
   		// })
   		// packing up data for addGameWithInfo function
   		var gameInfoData = {'title':gameName, 'players':selectedUsers};

   		// adding game
   		addGameWithInfo(gameInfoData);

   		// we don't actually want to submit to itself, addGameWithInfo handles redirect
		e.preventDefault();
   });

   $("#cancel_add_game").on("click", function(e){
      //Clear Up
      // localStorage.removeItem("game");
   });

   var addGameWithInfo = function(gameInfo){
   		if(gameInfo.title == "") //make sure we have a name
   			alert("Please enter a name for the game");
   		var addGameUrl = _app_base+"/api/games";
   		//var data = '{"players":["u1", "u2"], "title": "no_duplicate}';
   		console.log(JSON.stringify(gameInfo));

        $.ajax({
            url : addGameUrl,
            type: "POST",
            data : JSON.stringify(gameInfo),
            contentType:'application/json; charset=UTF-8',
            dataType: 'json',
            success: function(data) {
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
   }

});
