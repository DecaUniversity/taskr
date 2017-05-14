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
		
		controller: TaskController,
		controllerAs: "vm",
		restrict: "E",
		scope: {
			switchState: "&",
			description: "@",
			state: "=",
			taskId: "@"
		},
		// bindToController: true,
		templateUrl: "components/task/task.html",
		link
		
	};
	
	return directive;
	
}

TaskController.$inject = ["$scope"];

function TaskController($scope) {
	
	let vm = this;
	
	
}

function link(scope, element, attr, ctrl) {
	
	let taskMarker = $(".checkCircle", element);
	
	console.log(`at link: ${scope.description}`);
	console.log(`at link: ${scope.state}`);
	console.log(`at link: ${scope.taskId}`);
	console.log(`at link: ${scope.switchState}`);
	
	// ctrl.switchState(ctrl.taskId);
	
	// console.log(taskMarker);
	
	taskMarker.on("click", function (event) {
		
		event.stopPropagation();
		
		console.log("Clicked on it.");
		
		console.log(scope.state);
		
		if (scope.state) {
			
			taskMarker.removeClass("complete");
			taskMarker.addClass("incomplete");
			// ctrl.state = !ctrl.state;
			console.log("LOLOL???");
			scope.switchState(scope.taskId);
			
		} else {
			
			taskMarker.addClass("complete");
			taskMarker.removeClass("incomplete");
			// ctrl.state = !ctrl.state;
			console.log("LOLOL???");
			scope.switchState({taskId: ctrl.taskId});
			
		}
		
	})
	
}