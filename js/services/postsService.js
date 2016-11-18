((app) => {

  'use strict'
  app.service('usersService', function($http) {
      return {
          get() {
              return $http.get('/../posts.json') // promise
          }
      }
  })

})(angular.module('app.services'))
