"use strict";

/**
 * Progress Service
 * @namespace CommonServices
 */

(function (app) {
	
	/**
	 * @function TaskIDService
	 * @description Creates a unique ID for a task.
	 */
	
	app.factory("TaskIDService", TaskIDService);
	
	function TaskIDService() {
		
		let taskID = 0;
		
		let increaseTaskID = function () {
			
			return taskID++;
			
		};
		
		return {
			
			getID: increaseTaskID,
			
		}
		
	}
	
}(angular.module("main")));
