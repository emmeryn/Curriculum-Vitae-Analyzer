'use strict';

angular.module('myApp.view2', [])

.controller('View2Ctrl', function($scope, $q, $timeout, storageAccess) {
    $scope.selected = []; // selecting a row will bring us to the selected cv
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    $scope.columns = [{
      name: 'Name / filename',
      orderBy: 'id'
    }, {
      name: 'Match',
      numeric: true,
      orderBy: 'score',
      descendFirst: true,
      unit: '%'
    }, {
      name: 'Education',
      numeric: true,
      orderBy: 'education',
      unit: '%'
    }, {
      name: 'Essential Skills',
      numeric: true,
      orderBy: 'essSkills',
      unit: '%'
    }, {
      name: 'Preferred Skills',
      numeric: true,
      orderBy: 'prefSkills',
      unit: '%'
    }, {
      name: 'Work Exp',
      numeric: true,
      orderBy: 'experience',
      unit: '%'
    }, {
      name: 'Languages',
      numeric: true,
      orderBy: 'languages',
      unit: '%'
    }];

    $scope.cvMatch = storageAccess.getAllResults();

    $scope.onPaginationChange = function(page, limit) {

      console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
      console.log('Page: ' + page + ' Limit: ' + limit);

      var deferred = $q.defer();

      $timeout(function () {
        deferred.resolve();
      }, 2000);

      return deferred.promise;
    };

    $scope.loadStuff = function () {
      var deferred = $q.defer();

      $timeout(function () {
        deferred.reject();
      }, 2000);

      $scope.deferred = deferred.promise;
    };

    $scope.onOrderChange = function(order) {

      console.log('Scope Order: ' + $scope.query.order);
      console.log('Order: ' + order);

      var deferred = $q.defer();

      $timeout(function () {
        deferred.resolve();
      }, 2000);

      return deferred.promise;
    };

  });