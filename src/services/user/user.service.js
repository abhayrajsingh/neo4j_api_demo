import { json } from "body-parser";

export default class UserService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
	}

	get = () => {
		return this.$http.get('http://localhost:8080/neo4j/v1/employee')
			.then((response) => response.data);
	};

	addEmployee(body) {
		var request = {
			method: 'POST',
			url: 'http://localhost:8080/neo4j/v1/employee',
			headers: {
			  'Content-Type': "application/json"
			},
			data: body
		   }

		return this.$http(request)
			.then((response) => response.data);
	};
}
