'use strict';

describe('SessionsController', function () {
  beforeEach(module('moviematch'));
  describe('fetchSession()', function() {
    var $scope, $rootScope, $location, $httpBackend, $window, createSessionsController, Auth, Socket, Session;
    beforeEach(inject(function ($injector) {

      $rootScope = $injector.get('$rootScope');
      $location = $injector.get('$location');
      $httpBackend = $injector.get('$httpBackend');
      $window = $injector.get('$window');
      Session = $injector.get('Session');
      Auth = $injector.get('Auth');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createSessionsController = function () {
        return $controller('SessionsController', {
          $scope: $scope,
          $location: $location,
          Auth: Auth,
          Session: Session
        });
      };

    }));

    it('should have a session property on the scope property', function () {
      createSessionsController();
      expect($scope.sessions).to.be.a('array');
    });

    it('should call fetchSessions when controller is loaded', function () {
      sinon.spy(Session, 'fetchSessions');
      $httpBackend.expectGET('/api/sessions').respond(200);
      createSessionsController();
      $httpBackend.flush();
      expect(Session.fetchSessions.called).to.equal(true);
      Session.fetchSessions.restore();
    });

    it('should populate sessions property of the scope after the call to Session.fetchSessions()', function () {
      var mockSessions = [{}, {}];
      $httpBackend.expectGET('/api/sessions').respond(mockSessions);
      createSessionsController();
      $httpBackend.flush();
      expect($scope.sessions).to.deep.equal(mockSessions);
    });

  });
});