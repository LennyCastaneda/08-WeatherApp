(function() {
    'use strict';

    angular
        .module('myWeather')
        .factory('forcastFactory', forecastFactory);

    forecastFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function forecastFactory($http, $q) {
        var service = {
            getForecast : getForecast
        };
        return service;

        ////////////////

        function getForecast(cityName) {
            var defer = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&APPID=1d4d814e80fc783e2a58bf980adb2aa7' + '&units=imperial').then(
                function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response.data);
                    } else {
                        defer.reject(response.data);
                    }
                },
                function(error) {
                    defer.reject(error);
                }
            );

            return defer.promise;
        }
    }
})();