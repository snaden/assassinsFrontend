$(document).ready(function() {

   //Check whether the user is there
   var user = localStorage.getItem("user");
   var user_id = localStorage.getItem("user_id");
   console.log(user);
   console.log(user_id);
   if(user == null){ //user does not exist, bad!
     document.location='./login.html';
   } 
   if(user_id == null){ //user_id does not exist, bad!
     document.location='./login.html';
   } 


   //take a look at underscore.js for the utility functions
   var request_url = _app_base+"api/games/players/" + localStorage.getItem("user_id");
   _spinnerStart("game-pannel-spinner");
   $.getJSON(request_url, function(response){
      _spinnerStop("game-pannel-spinner");
      var games = response;
      console.log(games);
      for (var game in games){
            if(games.hasOwnProperty(game)){
               var anchor = $("<a>", {id: game, class: "game_item", text: games[game].title, href: './gameStatsScreen.html'})
               var div = $("<div>", {class: "text box"});
               div.append(anchor);
               $("#gamePannel").append(div);
               //We class need to setup the click listener
               setupGameStatsRedirect()
            }
      } 
   });

   $("#logout").on("click", function(e){
      //Clear User Info
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");
      localStorage.removeItem("game");
   });

   $("#add_game").on("click", function(e){
      //Clear Game Info
      localStorage.removeItem("game");
   });

   var setupGameStatsRedirect = function(){
      $(".game_item").on("click", function(e){
         var game_id = $(this).attr("id");
         //Storing Game
         localStorage.setItem("game", game_id);
      });
   }
   
    
});