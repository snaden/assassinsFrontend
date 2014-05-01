$(document).ready(function() {
	// _app_base = "http://localhost:8080/";
	window._app_base = "http://macassassingame.appspot.com/";

	//error handling
    window._displayErrorMessage = function(msg){
        $(".error").text(msg);
        $(".error").css("display","block");
    }

    window._clearErrorMessage = function(){
        //clear error message
        $(".error").text('');
        $(".error").css("display","none");
    }

    window._spinnerStart = function(){
    	$(".spinner").css("display","block");
    }

    window._spinnerStop = function(){
    	$(".spinner").css("display","none");
    }
});
