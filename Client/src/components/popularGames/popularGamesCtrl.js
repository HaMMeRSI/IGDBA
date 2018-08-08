export default class PopularGamesCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		$http.get(`http://localhost:3000/games/GetPopularGames`).then((res) => {
			$scope.games = res.data;
		});
	}
}
IGDBA.controller('popularGamesCtrl', PopularGamesCtrl);
