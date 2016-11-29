(function() {
  
  angular
    .module('meanApp')
    .controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$location', 'meanData', 'authentication'];
  function profileCtrl($location, meanData) {
    var vm = this;

    vm.user = {};

    meanData.getProfile()
      .success(function(data) {
        vm.user = data;
      })
      .error(function (e) {
        console.log(e);
      });

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