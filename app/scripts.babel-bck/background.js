(function() {
	'use strict';

	function checkAllSystemModules(){
		// Check all system modules, by clicking their checkboxes
		$("table[class='TableRecords']")
			.find("tr:contains('System Components'),"+
				" tr:contains('Platform Extensibility'),"+
				" tr:contains('(Users)'),"+
				" tr:contains('(App Feedback)'),"+
				" tr:contains('(Embedded Process Automation)'),"+
				" tr:contains('(LifeTime)'),"+
				" tr:contains('(LifeTimePerformanceMonitor)'),"+
				" tr:contains('(LifeTimeSDK)')")
			.find("input[type='checkbox']").click();
	}

	function init(){

		chrome.runtime.onInstalled.addListener(details => {
			console.log('previousVersion', details.previousVersion);
		});
		// Find the "Check all eSpaces" link and its div
		//var buttonDiv = document.querySelector(".Page_Content table:contains('Associate Components with Solution') tr td div "+
		//"a:contains('check all eSpaces')")[0].parentNode;
		var buttonDiv = $(".Page_Content table:contains('Associate Components with Solution') tr td div a:contains('check all eSpaces')")[0].parentNode;
		buttonDiv.appendChild(document.createTextNode(" | "));

		var anchor = document.createElement("a");
		var t = document.createTextNode("check system modules");
		anchor.appendChild(t);
		anchor.href = "#";
		anchor.onclick = function() {
			checkAllSystemModules();
			return false;
		};
		buttonDiv.appendChild(anchor);
	}

	init();
})();


(function() {     'use strict';      function scrollToBottom() {         // Based off of http://stackoverflow.com/questions/11715646/scroll-automatically-to-the-bottom-of-the-page         window.scrollTo(0,document.body.scrollHeight);     }      function init(){         MutationObserver = window.MutationObserver || window.WebKitMutationObserver;          var observer = new MutationObserver(function(mutations, observer) {             scrollToBottom();         });         observer.observe(document.querySelector('#wtTable2'), {             subtree: true,             attributes: true         });     }      init(); })();																																					      
