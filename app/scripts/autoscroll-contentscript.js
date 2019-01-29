(function() {     
	'use strict';

	function scrollToBottom() {         
		// Based off of http://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
		window.scrollTo(0,document.body.scrollHeight);
	}

	function init(){
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		var observer = new MutationObserver(function(mutations, observer) {
			scrollToBottom();
		});
		observer.observe(document.querySelector('#wtTable2'), {
			subtree: true,
			attributes: true
		});
	}

	// Using setTimeout, instead of 'load' event, due to SC currently overriding its handler
  setTimeout(init, 2000);
})();                                                                                                                                                          

