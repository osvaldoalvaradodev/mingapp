angular.module('app.routes', ['ionicUIRouter'])

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

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.detallesDeLaActividad'
      2) Using $state.go programatically:
        $state.go('tabsController.detallesDeLaActividad');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.detallesDeLaActividad', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/detallesDeLaActividad.html',
        controller: 'detallesDeLaActividadCtrl'
      },
      'tab2': {
        templateUrl: 'templates/detallesDeLaActividad.html',
        controller: 'detallesDeLaActividadCtrl'
      }
    }
  })

  .state('iniciarSesion', {
    url: '/page6',
    templateUrl: 'templates/iniciarSesion.html',
    controller: 'iniciarSesionCtrl'
  })

  .state('registrarse', {
    url: '/page9',
    templateUrl: 'templates/registrarse.html',
    controller: 'registrarseCtrl'
  })

  .state('tabsController.premios', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/premios.html',
        controller: 'premiosCtrl'
      }
    }
  })

  .state('tabsController.detallesDelPremio', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/detallesDelPremio.html',
        controller: 'detallesDelPremioCtrl'
      }
    }
  })

  .state('tabsController.premiarALaComunidad', {
    url: '/page12',
    views: {
      'tab4': {
        templateUrl: 'templates/premiarALaComunidad.html',
        controller: 'premiarALaComunidadCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});