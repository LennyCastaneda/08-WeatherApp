(function() {
    'use strict';

    angular
        .module('myWeather')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function weatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };
        return service;

        ////////////////

        function getWeather(cityName) {
            var defer = $q.defer();

            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=1d4d814e80fc783e2a58bf980adb2aa7' + '&units=imperial').then(
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

        // var today = $filter('date')(new Date(), 'yyyy-MM-dd HH;mm:ss Z');

        // vm.data.push( 'name', : data.
    }
})();