$(document).ready(function() {
	// _app_base = "http://localhost:8080/";
	window._app_base = "http://macassassingame.appspot.com/";

	//error handling
    window._displayErrorMessage = function(msg, className, id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).text(msg);
            $("#"+id).css("display","block");
        } else if ((className !== undefined) && (className !== null)){
            $("."+className).text(msg);
            $("."+className).css("display","block");
        }
    }

    window._clearErrorMessage = function(className, id){
        //clear error message
        $("."+className).text('');
        $("."+className).css("display","none");
    }

    window._spinnerStart = function(className, id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).css("display","block");
        } else if ((className !== undefined) && (className !== null)){
            $("."+className).css("display","block");
        }
    }

    window._spinnerStop = function(className, id){
        if((id !== undefined) && (id !== null)){
            $("#"+id).css("display","none");
        } else if ((className !== undefined) && (className !== null)){
            $("."+className).css("display","none");
        }
    }
});
