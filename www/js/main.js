$(document).ready(function() {
//	window.__dev_app_base = "http://localhost:8080/";
	window._app_base = "http://macassassingame.appspot.com/";

	//error handling
    window._displayErrorMessage = function(msg, id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).text(msg);
            $("#"+id).css("display","block");
        }
    };

    window._clearErrorMessage = function(id){
        //clear error message
        $("#"+id).text('');
        $("#"+id).css("display","none");
    };

    window._spinnerStart = function(id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).css("display","block");
        }
    };

    window._spinnerStop = function(id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).css("display","none");
        }
    }
});
