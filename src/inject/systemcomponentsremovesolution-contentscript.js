(function() {
	'use strict';

	console.log("initializing extension")
	function isRedesignedSC(){
	        // due to a lack of an official way to determine if the current SC is
	        // redesigned or not, we're relying on the "sc-layout" class being present
	        return document.querySelectorAll(".sc-layout").length > 0;
	}
	function checkAllSystemModules(){
		// Check all system modules, by clicking their checkboxes
		$("table[class='TableRecords']")
			.find("tr:contains('System Components'),"+
				" tr:contains('Platform Extensibility'),"+
				" tr:contains('(Users)'),"+
				" tr:contains('(App Feedback)'),"+
        " tr:contains('(App Feedback Mobile)'),"+
				" tr:contains('(Embedded Process Automation)'),"+
				" tr:contains('(LifeTime)'),"+
				" tr:contains('(LifeTimePerformanceMonitor)'),"+
				" tr:contains('(LifeTimeSDK)')")
			.find("input[type='checkbox']").click();
	}

	function init(){
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
		console.log("remove buttons added")
	}

	// Using setTimeout, instead of 'load' event, due to SC currently overriding its handler
  setTimeout(init, 2000);
})();
