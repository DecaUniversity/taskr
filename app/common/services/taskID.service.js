"use strict";

angular
	.module("main")
	.factory("TaskIDService", TaskIDService);

function TaskIDService() {
	
	let taskID = 0;
	
	let increaseTaskID = function () {
		
		return taskID++;
		
	};
	
	return {
		
		getID: increaseTaskID,
		
	}
	
}