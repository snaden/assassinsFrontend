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
		// console.log(users);
		for (var user in users){
		        if(users.hasOwnProperty(user)){
		        	// console.log(user);
		        	var userItem = $("<li>", {class: "text"});
		        	var userText = $("<span>");
		        	userText.append(user);
		        	var userCheckBoxSpan = $("<span>");
		        	var userCheckBox = 
		        		$("<input>",{class: "select_user", type: "checkbox", value: user, name:"game_users"});
		        	userCheckBoxSpan.append(userCheckBox);
		        	userItem.append(userCheckBoxSpan);
		        	userItem.append(userText);
		        	$("#user_check_list").append(userItem);
		        }
		} 
   });

   //Handles saving game
   $("#add_game_form").submit(function(e){
		var gameName = $("#game_name").val(); //input for title param of API
		var seletedUserBoxs = $('input:checkbox.select_user');
   		console.log(gameName);
   		var selectedUsers = []; //input for players param of API
   		seletedUserBoxs.each(function(){
   			if(this.checked)
   				selectedUsers.push($(this).val());
   		})
   		console.log(selectedUsers);

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
   		var addGameUrl = _app_base+"/api/games/";

        $.ajax({
            url : addGameUrl,
            type: "POST",
            data : JSON.stringify(gameInfo),
            contentType:'application/json; charset=UTF-8',
            dataType: 'json',
            success: function(data) {
            	console.log(data);
                // if (data.success === true) {
                // 	//redirect

                // } else {
                //     alert("Unable to create game at this time");
                // }
            },
            error: function () {
                console.log("Something's fundamentally wrong");
            }
        });
   }

});
