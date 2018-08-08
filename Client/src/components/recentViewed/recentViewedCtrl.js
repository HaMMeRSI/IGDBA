export default class RecentViewed {
	constructor ($scope, $route, $routeParams, $location, $http) {
		$http.get(`http://localhost:3000/games/getLastViewedGames`).then((res) => {
			$scope.games = res.data;
		});
	}
}
IGDBA.controller('recentViewedCtrl', RecentViewed);
