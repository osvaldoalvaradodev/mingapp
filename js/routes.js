angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.mingasCercanasParticipa', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/mingasCercanasParticipa.html',
        controller: 'mingasCercanasParticipaCtrl'
      }
    }
  })

  .state('tabsController.crearMinga', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/crearMinga.html',
        controller: 'crearMingaCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.detallesDeLaMinga', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/detallesDeLaMinga.html',
        controller: 'detallesDeLaMingaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});