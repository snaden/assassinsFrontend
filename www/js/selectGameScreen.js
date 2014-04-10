$(document).ready(function() {

   //Check whether the user is there
   var user = localStorage.getItem("user");
   console.log(user);
   if(user == null){ //user does not exist, bad!
     document.location='./login.html';
   } 

   //take a look at underscore.js for the utility functions
   $.getJSON("http://localhost:8080/api/list_games", function(response){
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
   });

   var setupGameStatsRedirect = function(){
      $(".game_item").on("click", function(e){
         var game_id = $(this).attr("id");
         alert(game_id);
         //Storing Game
         localStorage.setItem("game", game_id);
      });
   }
   
    
});