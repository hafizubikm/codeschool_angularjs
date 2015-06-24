(function() {
	var app = angular.module('todoApp', []);

	app.controller('todoController', ['$http', function($http) {
		var todoLists = this;

		todoLists.todos = [];

		$http.get('/todos').success(function(data) {
			todoLists.todos = data;
			console.log(todoLists.todos);
		})
		.error(function(data) {
			alert('failed');
		});
		
		console.log(todoLists.todos);
		this.visible = false;

		this.selectVisible = function(setVisible) {
			this.visible = setVisible;
		};

		this.addTodo = function(todo) {
			todoLists.todos.push(todo.newTodo);
			todo.newTodo = null;
		};

		this.remove = function(todo) {
			var index = todoLists.todos.indexOf(todo);
			todoLists.todos.splice(index, 1);
		};
	}]);
})();