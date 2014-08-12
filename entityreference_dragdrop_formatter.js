//commented
(function ($) {
  $(document).ready(function(){
  	var a = 1;
    $( ".draggable" ).draggable({
    	start: function(event, ui) {
    	 $(this).css("z-index", a++); 
    	}
    });
    $( ".droppable" ).droppable({
    	drop: function() {
    		alert( "dropped" );
    	}
    });

  });
})(jQuery);