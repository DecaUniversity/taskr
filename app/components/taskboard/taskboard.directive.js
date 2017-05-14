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
		
		controller: TaskBoardController,
		controllerAs: "taskBoard",
		// bindToController: true,
		restrict: "E",
		scope: {},
		templateUrl: "components/taskboard/taskboard.html",
		
	};
	
	return directive;
	
}

TaskBoardController.$inject = ['$scope', 'taskDataService'];

function TaskBoardController($scope, taskDataService) {
	
	let vm = this;
	
	vm.title = "TASKS";
	
	vm.tasks = taskDataService.getTasks();
	
	vm.tasks.map(task => console.log(task));
	
	
	vm.flip = function (num) {
		
		console.log("Is this getting called??");
		console.log(num);
		
		// let element = vm.tasks.filter(task => task.id === taskID);
		
		// console.log(taskID);
		
	}
	
}