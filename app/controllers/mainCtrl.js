'use strict';

/**
 * Main wrapper for all sub controllers
 * should contain all the methods related to navigation (page loading, blocking UI interaction, etc)
 * and global events listeners
 */
apsgUI.controller('mainCtrl', function ($scope, $location, $route, $window){

    /**
     * Used for navigation on button click
     */
    $scope.goToRoute = function (route) {
        $location.path(route);
    };

    $scope.$on('$viewContentLoaded', function () {
        alert('View content loaded!'); //TODO - try to build a modal for this (AND MAKE IT NICE!) ;)
    });

    /**
     * Group all wanted actions for the controller initialisation
     */
    function init() {
        //UH HUH, THIS MY SHIT!
    }

    /**
     * Start the magic
     */
    init();
});