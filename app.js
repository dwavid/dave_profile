/**
 * Created by dross on 5/15/17.
 */
var app = angular.module("dave", ['ui.router']);

app.controller("MainCtrl", ['$rootScope', function($rootScope) {

    var self = this;

    self.me = {
        firstName: 'Dave',
        lastName: 'Ross'
    };
    self.sections = {
        about: 'Stuff about me',
        skills: 'Stuff I\'m good at',
        work: 'Stuff I\'ve done',
        jobs: 'Jobs I\'ve done',
        projects: 'Projects I\'ve done',
        school: 'Stuff I\'ve learned'
    };
    self.mySkills = [
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
    self.viewingJob = 0;
    self.jobs = [
        {
            company: 'Jellyfish Health',
            dates: 'present',
            title: 'QC Specialist',
            bullets: [
                "Built and manage QC program, ensuring quality for cloud-based enterprise healthcare applications",
                "Reduced smoke testing from several hours to under 4 minutes using Protractor for automated testing",
                "Code new features and hot fixes using AngularJS, Bootstrap, and Sass",
                "Manage sprints to ensure continual delivery of features and fixes every two weeks"
            ]
        },
        {
            company: 'NantHealth',
            dates: '2013-2015',
            title: 'Technical Writer',
            bullets: [
                "Improved usability by coding a new, simplified, tablet-friendly layout for our clinical rounding application",
                "Coached new developers on AngularJS and Bootstrap best-practices",
                "Created user instructions for enterprise healthcare IT applications",
                "Collaborated with the training department to ensure accuracy and consistency across all documentation",
                "Assisted in designing UX wireframes and mockups"
            ]
        },
        {
            company: 'Idaho Transportation Department',
            shortName: 'ITD',
            dates: '2013',
            title: 'Technical Writer Intern',
            bullets: [
                "Edited and contributed to the Project Management Academy curriculum",
                "Worked with subject matter experts to create training material for MS Project",
                "Created brochures, pamphlets, and supplemental training material for the department's various programs"
            ]
        }
    ];
    self.viewingProj = 0;
    self.projects = [
        {
            name: 'Xamplio, LLC',
            title: 'Founder and Owner',
            bullets: [
                "Plan, code, and maintain Xamplio (www.xamplio.com), an online resume generator geared toward new job seekers (with thousands of users across all 50 states and over 65 countries)",
                "Manage backlog of user stories, tasks, and support tickets in Trello to ensure users have the features they need",
                "Implement and review Google, Facebook, and YouTube analytics to drive traffic and improve user retention",
                "Increased user account completion from 70% to over 90% by using analytics to drive UX improvements",
                "Reach an audience of over 1,500 viewers per day on YouTube, with total lifetime views over 1.5 million for the channel"
            ],
            websites: [
                "www.xamplio.com",
                "www.youtube.com/xamplio"
            ]
        },
        {
            name: 'User Story Generator',
            title: 'Creator',
            bullets: [
                "Capture user inputs to transform them into a properly written user story",
                "Utilize AngularJS, Semantic-UI, and some custom CSS to generate website"
            ],
            websites: ["dwavid.github.io/userStoryGenerator"]
        },
        {
            name: 'This site',
            title: 'Creator',
            bullets: [
                "Utilize Sass, Bulma, AngularJS, and gulp to code and deploy website",
                "Created scalable vector graphics (SVGs), including SVG animations",
                "Designed a simple UI to ensure the user can find information easily"
            ]
        }
    ];
}]);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider',
    function ($stateProvider, $httpProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Home',
                    scrollUp: true
                }
            })
            .state('default', {
                url: '',
                templateUrl: 'views/home.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Home',
                    scrollUp: true
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'About',
                    scrollUp: true
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Contact',
                    scrollUp: true
                }
            })
            .state('work', {
                url: '/work',
                templateUrl: 'views/work.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Work',
                    scrollUp: true
                }
            })
            .state('work.jobs', {
                url: '/jobs',
                templateUrl: 'views/jobs.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Work',
                    scrollUp: true
                }
            })
            .state('work.projects', {
                url: '/projects',
                templateUrl: 'views/projects.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Work',
                    scrollUp: true
                }
            })
            .state('skills', {
                url: '/skills',
                templateUrl: 'views/skills.html',
                controller: 'MainCtrl as main',
                data: {
                    pageTitle: 'Skills',
                    scrollUp: true
                }
            })
            .state('school', {
                url: '/school',
                templateUrl: 'views/school.html',
                controller: 'MainCtrl as main',
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