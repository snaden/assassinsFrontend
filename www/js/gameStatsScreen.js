// $(document).ready(function() {
//         // $.ajax({url:"http://localhost:8080/api/game_info?game_id=4925812092436480",success:function(result){
//         //     $("#info").html(result);
//         // }});

//     console.log($.ajax({url:"http://localhost:8080/api/game_info?game_id=4925812092436480"})




// });




$(document).ready(function() {
     $.ajax({url:"http://localhost:8080/api/game_info?game_id=4925812092436480",success:function(result){
        

        console.log(result['info'].num_player)
        var popup = document.createElement('div');
        popup.className = 'text instructions';
        var message = document.createElement('span');
        message.innerHTML = result['info'].num_player;
        popup.appendChild(message);
        document.getElementById("info").appendChild(popup);
        //document.body.appendChild(popup);
    }});


});
