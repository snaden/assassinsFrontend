$(document).ready(function() {

   //Check whether the user is there
   var user = localStorage.getItem("user");
   console.log(user);
   if(user == null){ //user does not exist, bad!
     document.location='./login.html';
   } 

   var game = localStorage.getItem("game");
   console.log(game);
   if(game == null){
      document.location='./selectGameScreen.html';
   }
   
   //take a look at underscore.js for the utility functions
   var url = "http://localhost:8080/api/game_player_status?username=" + user + "&title=" + game
   $.getJSON(url, function(response){

   });


   $("#logout").on("click", function(e){
      //Clear User Info
      localStorage.removeItem("user");
   });
   
    
});