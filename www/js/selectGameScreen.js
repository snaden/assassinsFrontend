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
               var anchor = $("<a>", {id: game, class: "gameItem", text: games[game].title})
               var div = $("<div>", {class: "text box"});
               div.append(anchor);
               $("#gamePannel").append(div);
               //We class need to setup the click listener
               $(".gameItem").on("click", function(e){
                  var game_id = $(this).id;
                  console.log(game_id);

               });
            }
      } 
   });


   $("#logout").on("click", function(e){
      //Clear User Info
      localStorage.removeItem("user");
   });
   
    
});