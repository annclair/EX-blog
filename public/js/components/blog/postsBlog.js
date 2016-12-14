((app) => {
    'use strict'

    app.component('postsBlog', {
        templateUrl: 'js/components/blog/postsBlog.html',

        controller: ['postsService', 'usersService', function(postsService, usersService) {

            this.user = usersService.currentUser
            let _previous = {}
            this.startIndex = 0

            postsService.get().then((res) => {
                this.posts = res.data
            })

            this.selected = (post, index) => {
                this.selectedPost = post
                this.selectedPost.position = index
            }

            //on ajoute des posts
            this.add = () => {
                postsService.add(this.newPost).then((res) => {
                    this.posts.push(res.data)
                    this.newPost = {}
                    this.newPost = null
                })
            }

            // on supprime les posts

            this.delete = () => {
                postsService.delete(this.selectedPost).then((res) => {
                    this.posts.splice(this.selectedPost.position, 1);
                    this.selectedPost = null
                })
            }

            // on modifie les posts
            this.edit = () => {
                _previous[this.selectedPost.position] = angular.copy(this.selectedPost)
            }

            this.save = () => {
              postsService.edit(this.selectedPost).then((res) => {
                  this.posts.push(res.data)
              })

            }

            //on annule une modification en cours
            this.cancel = () => {
                this.posts[this.selectedPost.position] = _previous[this.selectedPost.position]
                this.selectedPost = null
            }

            // gestion des fleches précedent & suivant
            this.next = function(posts) {
                this.startIndex += 1;
            };

            this.back = function(posts) {
                this.startIndex -= 1;
            };
        }]
    })

})(angular.module('app.posts'))
