var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/searchPage.html', {
        controller: "searchController",
        templateUrl: "App/Partials/searchPage.html"
    })
    .when('/detailsPage.html/:imdbID', {
        controller: "DetailsController",
        templateUrl: "App/Partials/detailsPage.html"
    })
    .otherwise({ redirectTo: '/searchPage.html' });
});
  