$(document).ready(function() {

   var games = {
   		BattleRoyal : 20,
   		MyGame : 5,	
         AnotherGame : 8,
         YetAnotherGame: 60,
         Game : 15
   };  

   for (var game in games){
   		if(games.hasOwnProperty(game)){
   		   var $div = $("<div>", {id: game, class: "text box", text: game});
            $("#gamePannel").append($div);

         }
   }
   
});