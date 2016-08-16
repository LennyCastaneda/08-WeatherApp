(function() {
	'use strict';

	angular
	.module('myWeather')
	.controller('weatherCtrl', weatherCtrl);

	weatherCtrl.$inject = ['weatherFactory'];

	function weatherCtrl(weatherFactory, forecastFactory) {
		var vm = this; //jshint ignore:line
		vm.getWeather = getWeather;
		vm.histories = [];
		vm.cityName = [];
		vm.getForecast =getForecast;

		
		function getWeather(cityName) {
			weatherFactory.getWeather(cityName).then(
				function(data) {
					vm.data = data;
					vm.histories.push({
	           			name: vm.data.name,
	           			date: new Date()
			});
				},
				function(error) {
					console.log(error);
				});
			}
	}
})();