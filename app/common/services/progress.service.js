"use strict";

/* eslint-disable no-invalid-this */

angular.module("main").service("ProgressService", function () {
	
	let tasksCompleted = 0;
	
	this.increaseProgress = function () {
		
		tasksCompleted += 1;
		console.log(tasksCompleted);
		
	};
	
	this.decreaseProgress = function () {
		
		tasksCompleted -= 1;
		console.log(tasksCompleted);
		
	};
	
	this.getProgress = function () {

		return tasksCompleted;

	};
	
});
