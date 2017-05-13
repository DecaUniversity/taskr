"use strict";

/**
 * @desc list directive to prototype the base list structure
 * @example <dh-list></dh-list>
 */

angular
	.module("main")
	.directive("dhTaskBoard", dhList);

function dhList() {
	
	let directive = {
		
		restrict: "E",
		templateUrl: "components/taskboard/taskboard.html",
		
	};
	
	return directive;
	
}