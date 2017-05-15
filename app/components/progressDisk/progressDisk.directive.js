"use strict";

/* eslint-disable  no-ternary */
/* eslint-disable  quotes */

/**
 * Task Board Component
 * @namespace Components
 */

(function (app) {
	
	/**
	 * @desc progress disk directive that shows how many tasks have been
	 * completed.
	 * @example <dh-progress-disk></dh-progress-disk>
	 */
	
	app.directive("dhProgressDisk", ["ProgressService", function (ProgressService) {
		
		return {
			
			templateUrl: "components/progressDisk/progressDisk.html",
			scope: {
				size: "<",
				thickness: "<",
				fill: "<",
				cycle: "<"
			},
			link (scope, element, attributes) {
				
				const radiansMultiplier = 2.5;
				
				const circle = $("#disk", element);
				const progressText = $("#progress", element);
				const startAngle = Math.PI * radiansMultiplier * -1;
				
				const minSize = 150;
				const minThickness = 3;
				const defaultThickness = 10;
				const defaultFill = "white";
				
				const fullProgress = 100;
				
				progressText.css("color", scope.fill);
				
				scope.$watch(ProgressService.getProgress, function (newVal, oldVal) {
					
					circle.circleProgress({
						value: newVal / scope.cycle,
						size:
							scope.size >= minSize
								? scope.size
								: minSize,
						startAngle,
						thickness:
							scope.thickness <= scope.size / 2 && scope.thickness >= minThickness
								? scope.thickness
								: defaultThickness,
						fill:
							scope.fill
								? scope.fill
								: defaultFill
						
					}).on("circle-animation-progress", function (event, progress, stepValue) {
						
						const displayStepValue = (stepValue * fullProgress).toFixed(0);
						
						if (displayStepValue == fullProgress) { // eslint-disable-line eqeqeq
							
							progressText.text("");
							progressText.css("font-size", "500%");
							progressText.append('<i class="fa fa-trophy" aria-hidden="true"></i>');
							
							return;
							
						}
						
						progressText.text(displayStepValue);
						
					});
					
				});
				
			}
			
		};
		
	}]);
	
}(angular.module("main")));
