$(document).ready(function() {

   var games = {
   		BattleRoyal : 20,
   		MyGame : 5	
   };  
   for (var game in games){
   		if(games.hasOwnProperty(game)){
   			$("#gamePannel").append("<div class=\"text box\">Test</div>");
   		}
   }
   
});