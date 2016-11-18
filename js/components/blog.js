((app) =>{
  'use strict'

  app.component('blog',{
    templateUrl : 'js/components/blog.html',

    controller : ['selectedPost' ,function(selectedPost,http) {

        let _previous = {}
        this.startIndex = 0

        // on récupere les posts
        // $http.get('/../posts.json').then((res) => {
        //     this.posts = res.data
        // })

        this.suppression=(post, index) => {
          this.selectedPost = post
          this.selectedPost.position = index
        }

        //on ajoute des posts
        this.add = () => {
            this.posts.push(this.newPost)
            this.newPost = {}
        }

        // on supprime les posts

        this.delete = () => {
            this.posts.splice(this.selectedPost.position, 1);
            this.post = null
        }

        // on modifie les posts
        this.edit = () => {
            _previous[this.selectedPost.position] = angular.copy(this.selectedPost)
        }

        //on annule une modification en cours
        this.cancel = () => {
            this.posts[this.selectedPost.position] = _previous[this.selectedPost.position]
            this.selectedPost = null
        }

        // gestion des fleches précedent & suivant
        this.next = function(posts){
            this.startIndex += 1;
        };

        this.back = function(posts){
            this.startIndex -= 1;
        };
    }]
  })

})(angular.module('app.blog', []))
