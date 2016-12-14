((app) => {
    'use strict'

    app.component("login", {
        templateUrl: 'js/components/login/login.html',
        controller: ['usersService', '$state', function(usersService, $state) {
            angular.extend(this, {
                connect() {
                    usersService.connect(this.user).then((res) => {
                          usersService.currentUser = res.data.user
                          $state.go('app.blog')
                    })
                }
            })
        }]
    })
})(angular.module('app.login'))
