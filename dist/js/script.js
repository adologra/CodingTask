'use strict';

var cards = [];

function onreadystatechange () {
  	if (document.readyState === 'complete') {
        cards = document.querySelectorAll('.card-wrapper');
 	}
}

function selectFilter(evt) {
	if (evt) {
		var type = evt.value;
	    if (evt.checked ) {
	    	cards.forEach(function(item) {
	    		if( item.dataset.type === type && !$(item).hasClass('hidden')){
	    			$(item).addClass('hidden');
	    		}
	    	});
	    } else {
	    	cards.forEach(function(item) {
	    		if(item.dataset.type === type && $(item).hasClass('hidden')){
	    			$(item).removeClass('hidden');
	    		}
	    	});
	    }
	}
}

(function(){
	cards = [];
    //Document's events
	document.onreadystatechange = onreadystatechange;
})();
