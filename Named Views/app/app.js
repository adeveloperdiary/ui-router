var app = angular.module('MyApp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: "/home",
            views:{
                '':{
                    templateUrl:'app/partials/home.template.html',
                },

                'step1@home':{
                    templateUrl:"app/partials/step1.template.html"

                },
                'step2@home':{
                    templateUrl:'app/partials/step2.template.html'
                }
            }
        })
        .state('about', {
            url: "/about",
            template:"<h3 class='text-center'>This is a Setup Wizard !</h3>",
        });
});

