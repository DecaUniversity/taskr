"use strict";

angular
	.module("main")
	.factory("taskDataService", taskDataService);

taskDataService.$inject = ["TaskIDService"];

function taskDataService (TaskIDService) {
	
	let taskList = createTaskList(taskDescriptions, TaskIDService);
	
	
	let service = {
		
		getTasks: function () {
			
			return taskList;
			
		}
		
	};
	
	return service;
	
}

let taskDescriptions = [
	`Read "High Performance Mobile Web" by Maximiliano Firtman.`,
	`Integrate ngTouch on To-do list app.`,
	`Walk to Target to buy floss.`,
	`Donate Amazon boxes to Cat Shelter.`,
	`Register for AngularMix ft. John Papa & Dan Wahlin.`,
	`Watch "Senior Devs react to React" on YouTube.`
];

let createTaskList = function (descriptions, TaskIDService) {
	
	let list = [];
	
	descriptions.map(description => list.push(createTask(description, TaskIDService.getID())));
	
	// list.map(elem => console.log(elem));
	
	return list;
	
};

let createTask = function (taskDescription, taskID) {
	
	// console.log(`taskDesc: ${taskDescription}`);
	// console.log(`taskID: ${taskID}`);
	
	return {
		
		id: taskID,
		description: taskDescription,
		completed: false
		
	}
	
};