# taskr: Code Challenge

## App Requirements

### Core Goal
Create a Single Page Application in which the homepage lists a set of Tasks the User has to complete for the day.

### Specs

* Use AngularJS
* Create a Service that has a total of 10 Tasks a User could do.
    * When the User goes to the homepage of the app, 6 tasks are randomly chosen and assigned to the User.
* Create a Directive that utilizes https://github.com/kottenator/jquery-circle-progress and shows the number of items remaining in the circle as a percent complete.
    * The Directive should allow for optional parameters to be passed in to change default settings, such as size or color.
* The User should be able to click on a Task to mark it complete and the arc of the circle increases proportionately.
* Freestyle UI design.


### Evaluation Criteria

* Quality of JavaScript  and AngularJS code.
    * Production quality.
    * Maintainable.
        * Follow Clean Code best practices.
* Application organization.
* Project structure.
* Satisfied requirements.
* Operability and presence of defects.
* Quality of user experience.

### Data

* Can make the tasks up.

### User Experience (Evolving)

* User is presented with six random Tasks that are chosen from a set of ten.
* User should be able to mark a Task as complete.
* User should be able to see a circle that represents the Progress made on completed the assigned Tasks.


### Components

* Task Board
* Task
* Progress Disk
