((app) =>{
  'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.posts', {
            url:'/',
            template:'<posts-blog></posts-blog>'
        })
    }])
})(angular.module('app.posts', []))
