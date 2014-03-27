/**
 * Created by SAM on 3/6/14.
 */

//function myFunction()
//{
////    document.getElementById("passwordSubmit").innerHTML = Date();
//    document.getElementById("passwordSubmit").appendData("Hi");
//}

$("#passwordSubmit").click(function myFunction(){
    $("div").append("<b>Appended text</b>");
});

function popUp(){
    var popup = document.createElement('div');
    popup.className = 'text instructions';
    var cancel = document.createElement('div');

    cancel.innerHTML = 'close';
    cancel.onclick = function (e) { popup.parentNode.removeChild(popup) };
    var message = document.createElement('span');
    message.innerHTML = "An email has been sent to you with new password information.";
    popup.appendChild(message);
    popup.appendChild(cancel);
    document.body.appendChild(popup);
}