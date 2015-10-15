var app = angular.module('MyApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home:finished",
            //abstract: true,
            templateUrl:'app/partials/home.template.html',
            controller:'homeController'
        })
        .state('home.step1', {
            url: "/step1",
            templateUrl:'app/partials/step1.template.html'
        })
        .state('home.step2', {
            url: "/step2",
            templateUrl:'app/partials/step2.template.html',
            controller:'stepFinishController'
        })
        .state('about', {
            url: "/about",
            //abstract: true,
            template:"<h3 class='text-center'>This is a Setup Wizard !</h3>",
        });
});

app.controller('homeController',
    function($scope,$stateParams){

        $scope.msg="Welcome !"

        if($stateParams.finished==='Y') {
            $scope.msg="Setup completed !"
        }
    });

app.controller('stepFinishController',
    function($scope,$state,$stateParams){

        $scope.finishSetup=function(){

            $stateParams.finished='Y';

            $state.transitionTo('home',$stateParams,{reload:true});
        };

    });


