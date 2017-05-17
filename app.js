/**
 * Created by dross on 5/15/17.
 */
var app = angular.module("dave", ['ui.router']);

app.controller("MainCtrl", function($scope) {
    $scope.me = {
        firstName: 'Dave',
        lastName: 'Ross'
    };
    $scope.sections = {
        about: 'Stuff about me',
        skills: 'Stuff I\'m good at',
        work: 'Stuff I\'ve done',
        school: 'Stuff I\'ve learned'
    };
    $scope.mySkills = [
        "HTML5",
        "CSS3",
        "UX Design",
        "Agile / Scrum",
        "UI Design",
        "Angular",
        "Bootstrap",
        "Semantic-UI",
        "Git",
        "Technical Writing",
        "Training",
        "Google Analytics",
        "Javascript",
        "Vector Graphics",
        "JIRA"
    ];
});

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'Home',
                    scrollUp: true
                }
            })
            .state('default', {
                url: '',
                templateUrl: 'views/home.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'Home',
                    scrollUp: true
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'About',
                    scrollUp: true
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'Contact',
                    scrollUp: true
                }
            })
            .state('work', {
                url: '/work',
                templateUrl: 'views/work.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'Work',
                    scrollUp: true
                }
            })
            .state('skills', {
                url: '/skills',
                templateUrl: 'views/skills.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'Skills',
                    scrollUp: true
                }
            })
            .state('school', {
                url: '/school',
                templateUrl: 'views/school.html',
                controller: 'MainCtrl as ctrl',
                data: {
                    pageTitle: 'School',
                    scrollUp: true
                }
            });
    }
]);

app.directive('title', ['$rootScope', '$timeout', '$window', '$state', '$location',
    function($rootScope, $timeout, $window, $state, $location) {
        return {
            link: function() {

                var listener = function(event, toState) {

                    $timeout(function() {
                        $rootScope.title = (toState.data && toState.data.pageTitle)
                            ? toState.data.pageTitle
                            : 'TESTING';
                        if(toState.data.scrollUp) {
                            $window.scrollTo(0, 0);
                        }
                    });
                };
                $rootScope.$on('$stateChangeSuccess', listener);
            }
        };
    }
]);