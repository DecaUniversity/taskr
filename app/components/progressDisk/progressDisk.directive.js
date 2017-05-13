"use strict";

/**
 * @desc progress disk directive that shows how many tasks have been
 * completed.
 * @example <dh-progress-disk></dh-progress-disk>
 */

angular
	.module("main")
	.directive("dhProgressDisk", dhProgressDisk);

function dhProgressDisk() {
	
	let directive = {
		
		link: link,
		restrict: "E",
		templateUrl: "components/progressDisk/progressDisk.html"
		
	};
	
	function link (scope, elem, attr) {
		
		let taskCount = 5;
		
		$('#disk', elem).circleProgress({
			value: (1 / 6) * taskCount,
			size: 180,
			startAngle: -Math.PI * 0.5,
			thickness: 10,
			fill: {
				gradient: ["white", "white"]
			}
		}).on("circle-animation-progress", function (event, progress, stepValue) {
			
			let displayStepValue = (stepValue * 100).toFixed(0);
			
			$("#progress", elem).text(displayStepValue);
		});
		
	}
	
	return directive;
	
}