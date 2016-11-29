(function() {
  
  angular
    .module('meanApp')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', '$scope', 'meanData', 'authentication'];
  function profileCtrl($location, meanData) {

    console.log("got to profile ctrl");
    var vm = this;

    vm.user = {};

    vm.idea = {
      ideaName: "",
      ideaDescription: ""
    }

    meanData.getProfile()
      .success(function(data) {
        vm.user = data;
      })
      .error(function (e) {
        console.log(e);
      });

    vm.addIdea = function() {
      console.log(vm.idea);
      return http.post('/api/addIdea', vm.idea).success(function(data) {
        console.log(data);
      });
    };
    /*vm.logout = function () {
      console.log("logout pressed");
      authentication
        .logout()
        .error(function(err){
          alert(err);
        })
        .then(function(){
          $location.path('/');
        });
    };*/
  }

})();