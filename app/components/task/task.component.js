"use strict";

/**
 * Task Board Component
 * @namespace Components
 */

(function (app) {
	
	/**
	 * @desc Task component that presents a task with its description
	 * and check mark element.
	 * @example <dh-task></dh-task>
	 */
	
	app.component("dhTask", {
		
		templateUrl: "components/task/task.html",
		bindings: {
			description: "@",
			state: "<",
			taskId: "<",
			flip: "&"
		}
	});
	
}(angular.module("main")));
