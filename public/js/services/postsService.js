((app) => {

  'use strict'
  app.service('postsService', function($http) {
      return {
        get() {
            return $http.get('/api/posts')
        },
        add(post) {
            return $http.post('/api/posts', post)
        },
        edit(post) {
            return $http.put('/api/posts/' + post._id, post)
        },
        delete(post) {
            return $http.delete('/api/posts/' + post._id)
        }
      }
  })

})(angular.module('app.services'))
