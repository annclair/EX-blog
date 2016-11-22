((app) => {

  'use strict'
  app.service('postsService', function($http) {
      return {
          get() {
              return $http.get('/../posts.json') // promise
          }
      }
  })

})(angular.module('app.services'))
