angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('ProfileslistCtrl', function($scope) {
    $scope.profileslist = [
	{
	    title: 'Dr X',
	    id: 1,
	    description: 'a',
	    pic: 'red-fox2.jpg'
	},
	{
	    title: 'Nourse X',
	    id: 4,
	    description: 'a',
	    pic: 'red-fox2.jpg'
	},
    ];
    //$scope.orderProp = 'age';
})

.controller('ProfileCtrl', function($scope, $stateParams) {
    $scope.title = $stateParams.title;
    $scope.id = $stateParams.id;
    $scope.pic = $stateParams.pic;
})

.controller('PPPProfileCtrl', ['$scope', '$rootParams', function($scope, $rootParams) {
    var pid = $rootParams.profileId;
    $scope.profile = $scope.profileslist[pid];
}])

.controller('FeedbacklistCtrl', function($scope) {
  $scope.feedbacks = [
    {
      title: 'Dr Ms Peralta',
      id: 1,
      image: 'doctor_female_young.jpg',
      description: 'Pediatric'
    },
    {
      title: 'Barcelona Clinic',
      id: 2,
      image: 'logo_barcelona.png',
      description: 'Villarroel 170, Barcelona, Spain'
    }
  ];
})

.controller('FeedbackdetailCtrl', function($scope, $stateParams) {
  $scope.data = {
    'comfortable' : '5',
    'kind' : '5',
    'helful' : '5'
  };
})

.controller('WhoisWhoCtrl', function($scope, $rootScope, $ionicPlatform, $cordovaBeacon){
    $scope.employyes = [
    {
      id: 10,
      image: 'person1.jpg',
      name: 'Clara Healty'
    },
    {
      id: 20,
      image: 'person2.jpg',
      name: 'Mike Headache'
    },
    {
      id: 30,
      image: 'person3.jpg',
      name: 'Christina Happyfeet'
    }
  ];
})

.controller('SocialCtrl', function($scope) {
  $scope.people = [
    {
      id: 1,
      image: 'person1.jpg',
      name: 'Clara Healty'
    },
    {
      id: 2,
      image: 'person2.jpg',
      name: 'Mike Headache'
    },
    {
      id: 3,
      image: 'person3.jpg',
      name: 'Christina Happyfeet'
    }
  ];
})

.controller('ChatCtrl', function($scope, $stateParams) {
  $scope.personId = $stateParams.personId;
  $scope.personName = $stateParams.personName;
  $scope.chats = [
    "Hello!",
    "Hallo",
    "Hello, how are you?",
    "Hey! Are you down for some Kung-Fu practice?"
  ];
});
