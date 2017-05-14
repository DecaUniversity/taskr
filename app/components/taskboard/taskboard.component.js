"use strict";

(function (app) {
	
	const TaskController = function (TaskDataService, ProgressService) {
		
		this.taskList = TaskDataService.getTasks();
		
		this.showTasks = false;
		
		this.flipShowTasks = function () {
			
			this.showTasks = !this.showTasks;
			
		};
		
		this.flip = function (taskID) {
			
			const task = this.taskList.filter((taskItem) => taskItem.id === taskID)[0];
			
			task.completed = !task.completed;
			
			if (task.completed) {
				
				ProgressService.increaseProgress();
				
			} else {
				
				ProgressService.decreaseProgress();
				
			}
			
		};
		
	};
	
	app.component("dhTaskboard", {
		
		templateUrl: "components/taskboard/taskboard.html",
		bindings: {taskboardTitle: "@"},
		controller: ["TaskDataService", "ProgressService", TaskController]
		
	});
	
}(angular.module("main")));
