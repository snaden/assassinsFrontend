
//This code isn't currently used.
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
    //document.body.appendChild(popup);


    console.log(document.body.childNodes.length)
    if(document.body.childNodes.length<12 && document.getElementById('input').value!=""){
        document.body.appendChild(popup);
    }

    console.log(document.getElementById('input').value)
}