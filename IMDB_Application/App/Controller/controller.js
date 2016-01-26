var movieDB = {content : null};
app.controller("searchController", function ($scope, searchService) {

    $scope.searchMovie = function () {
        $scope.movies = {content : null};
        var searchKey = $scope.searchedmovie.split(" ").join("+");
        /* var searchItem = "http://img.omdbapi.com/?apikey=[" + $scope.searchedmovie + "]&";*/
        var searchItem = "http://www.omdbapi.com/?s=" + searchKey + "&y=&plot=short&r=json";
        var promise = searchService.searchMovie(searchItem);

        promise.then(function (data) {
            if (data.data.Search != "undefined") {
                $scope.movies = data.data.Search;
                movieDB = data.data.Search;           
            }
        });
    };
});


app.controller('DetailsController', function ($scope, $routeParams, searchService) {
$scope.movie = { content: null };
init();
function init() {
    var imdbID = $routeParams.imdbID;     
    if (imdbID != undefined) {
        var searchKey = "http://www.omdbapi.com/?i=" + imdbID + "&full&plot=&r=json";
        var promise = searchService.getMovieDetails(searchKey);
        promise.then(function (data) {            
            $scope.movie = data.data;
        });
        }
    }
});