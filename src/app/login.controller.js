'use strict';

angular.module('CSIChat').controller('loginCtrl',loginCtrl);

loginCtrl.$inject = ['$scope', 'userService', '$location', 'authService'];

/**
 * handles the login page
 * @param $scope
 * @param userService: does the logging in API calls
 * @param $location: redirects
 * @param authService: logs the user out before logging them in.
 */
function loginCtrl ($scope, userService, $location, authService) {

    // to track the user details on the login form
    $scope.user = {};
    var ctrl = this;

    this.goHome = function() {
        $location.path('/csi/home');
    };

    let windowObjectReference;
    let strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes`;

    $scope.openRequestedPopup = function () {
        windowObjectReference =
            window.open(
                "https://localhost:8080/hatemonitor_war/#!/fah/reportHate",
                "FAH",
                strWindowFeatures
            );
        print("hello")
    }
    /**
     * uses the service to try and login
     * redirects the user to the home page
     */
    $scope.login = function () {

        authService.logout();
        $scope.badLogin = false;
        userService.login($scope.user.email, $scope.user.password)
            .success(function(data) {
                    ctrl.goHome();
                }
            );
    };
}
