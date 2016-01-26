app.service("searchService", function ($http, $q) {
    this.searchMovie = function (searchKey) {
        var deferred = $q.defer();
        $http.get(searchKey).then(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.getMovieDetails = function(searchKey){
        var deferred = $q.defer();
        $http.get(searchKey).then(function(data){
            deferred.resolve(data);
        });
        return deferred.promise;
    }
});