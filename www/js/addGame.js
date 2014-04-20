$(document).ready(function() {

   //Check whether the user is there
   var user = localStorage.getItem("user");
   console.log(user);
   if(user == null){ //user does not exist, bad!
     document.location='./selectGameScreen.html';
   } 

   //Getting all the users
   

   $("#cancel_add_game").on("click", function(e){
      //Clear Game Info
      localStorage.removeItem("game");
   });

});
