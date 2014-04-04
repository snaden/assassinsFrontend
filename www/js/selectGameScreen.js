$(document).ready(function() {

   var games;

   $.getJSON("http://localhost:8080/api/list_games", function( response ){
      games = response;
      console.log(games);
      for (var game in games){
            if(games.hasOwnProperty(game)){
               var $div = $("<div>", {id: game, class: "text box", text: games[game].title});
               $("#gamePannel").append($div);
            }
      } 
   });
   
    
});