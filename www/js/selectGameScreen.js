$(document).ready(function() {

   var games;

   // $.ajax({
   //    url: "http://localhost:8080/api/list_games",
   //    type: "GET",
   //    contentType:'application/json; charset=UTF-8',
   //    dataType: 'json',
   //    success: function(response) {
   //                games = response;         
   //             }
   // });

   $.getJSON("http://localhost:8080/api/list_games", function( response ){
      games = response;
      for (var game in games){
            if(games.hasOwnProperty(game)){
               var $div = $("<div>", {id: game, class: "text box", text: games[game].title});
               $("#gamePannel").append($div);
            }
      } 
   });
   
    
});