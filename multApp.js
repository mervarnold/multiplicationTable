'use strict';

angular.module('multApp', [])
	.controller('MultiplicationCtrl', function($scope){
		var c = this;

		function populateNumbers(x) {
			c.numbers = [];
			for (var i = 1; i < x + 1; i++) {
				c.numbers.push(i)
			}
		}
		
		$scope.$watch('numberLimit', function(limit){
			if (!limit) {
				populateNumbers(10);
				return;
			}
			populateNumbers(limit);
		});
	});