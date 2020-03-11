import { Integer, integer } from "neo4j-driver";

export default class HomeController {
	
	constructor($log, userService, $scope) {
		'ngInject';

		this.$log = $log;
		this.userService = userService;
		this.empName;
		this.empID;
		this.showMessage = false;
		this.showError = false;
		this.users =[];
		this.$scope = $scope;
	}

	$onInit = () => {
		this.heading = 'Add an employee';
		this.message = 'Employee has been added successfully!';
		this.$log.info('Activated Home View.');
	};

	validateInputs = function () {
		if((this.empName == undefined )|| (this.empName == "") || (this.empID ==  "") || isNaN(parseInt(this.empID))  || (parseInt(this.empID) < 1)){
			this.showError = true;
			this.errorMessage = 'Please input valid employee name & ID!';

			return false;
		}

		return true;
	}; 

	addEmployee = function () {
		console.log("empName", this.empName);
		if(this.validateInputs()){
			var jsonObj =  {"name" : this.empName, "id": parseInt(this.empID)};
			this.userService.addEmployee(jsonObj).then((users) => {
				this.users = users;
	
				if(this.users.length > 0){
					this.showMessage = true;
					//setTimeout(function($scope){ $scope.resetEmployee() }, 3000);
					//$timeout(resetEmployee, 3000);
				}
			});
		}
	}; 

	resetEmployee = function () {
		this.empName =  this.empID = "";
		this.showMessage = false;
		this.showError = false;
	}; 

	resetError = function () {
		this.showMessage = false;
		this.showError = false;
	}; 
}
