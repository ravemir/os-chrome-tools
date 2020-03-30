(function() {     
	'use strict';

	console.log("initializing extension")
	function scrollToBottom() {         
		// Based off of http://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page
		window.scrollTo(0,document.body.scrollHeight);
	}
	function isRedesignedSC(){
		// due to a lack of an official way to determine if the current SC is 
		// redesigned or not, we're relying on the "sc-layout" class being present 
		return document.querySelectorAll(".sc-layout").length > 0;
	}

	function init(){
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		var observer = new MutationObserver(function(mutations, observer) {
			scrollToBottom();
		});
		var statusTable = '';
		if(isRedesignedSC()){
			// yet to implement
		} else {
			statusTable = '#wtTable2'
		}

		if(statusTable <= 0){
			console.log("auto-scroll failed to initialize")
			return;
		}

		observer.observe(document.querySelector(statusTable), {
			subtree: true,
			attributes: true
		});
		console.log("auto-scroll initialized")
	}

	// Using setTimeout, instead of 'load' event, due to SC currently overriding its handler
  setTimeout(init, 2000);
})();                                                                                                                                                          

