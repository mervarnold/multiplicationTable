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

		c.setActiveFactors = function(a, b) {
			c.activeFactorA = a;
			c.activeFactorB = b;
		};

		c.clearActiveFactors = function() {
			c.activeFactorA = c.activeFactorB = null;
		}

		c.matchesFactor = function(a, b) {
			return a === c.activeFactorA || b === c.activeFactorB;
		};

	});