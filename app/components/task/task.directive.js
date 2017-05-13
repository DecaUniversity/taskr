"use strict";

/**
 * @desc task directive to hold data about one task
 * @example <dh-task></dh-task>
 */

angular
	.module("main")
	.directive("dhTask", dhTask);

function dhTask() {
	
	let directive  = {
		
		restrict: "E",
		templateUrl: "components/task/task.html"
		
	};
	
	return directive;
	
}