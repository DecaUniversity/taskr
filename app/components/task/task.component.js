"use strict";

angular.module("main").component("dhTask", {
	
	templateUrl: "components/task/task.html",
	bindings: {
		description: "@",
		state: "<",
		taskId: "<",
		flip: "&"
	}
	
});
