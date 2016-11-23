((app) =>{
  'use strict'

  app.component('blogsPost',{
    templateUrl : 'js/components/blogsPost.html',

    controller : ['blogsService',function(blogsService) {

        //let _previous = {}
        //this.startIndex = 0

        // on récupere les posts
        // $http.get('/../posts.json').then((res) => {
        //     this.posts = res.data
        // })

        blogsService.get().then((res) => {
            this.posts = res.data
        })

    //     this.selected=(post, index) => {
    //       this.selectedPost = post
    //       this.selectedPost.position = index
    //     }
    //
        //on ajoute des posts
        this.add = () => {
            blogsService.add(this.newPost).then((res) => {
                this.posts.push(res.data)
                this.newPost = {}
            })
        }

    //     // on supprime les posts
    //
    //     this.delete = () => {
    //         this.posts.splice(this.selectedPost.position, 1);
    //         this.post = null
    //     }
    //
    //     // on modifie les posts
    //     this.edit = () => {
    //         _previous[this.selectedPost.position] = angular.copy(this.selectedPost)
    //     }
    //
    //     //on annule une modification en cours
    //     this.cancel = () => {
    //         this.posts[this.selectedPost.position] = _previous[this.selectedPost.position]
    //         this.selectedPost = null
    //     }
    //
    //     // gestion des fleches précedent & suivant
    //     this.next = function(posts){
    //         this.startIndex += 1;
    //     };
    //
    //     this.back = function(posts){
    //         this.startIndex -= 1;
    //     };
     }]
  })

})(angular.module('app.blogs'))
