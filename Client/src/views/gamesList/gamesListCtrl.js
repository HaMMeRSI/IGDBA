import './gamesListStyle.less';

export default class GamesListCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
		$scope.openGameView = this.openGameView;

		$http.get(`http://localhost:3000/games/getAllGames`).then((res) => {
			$scope.games = res.data;
		});
	}

	openGameView (id) {
		window.location.href = `#!gameView?id=${id}`;
	}
}
IGDBA.controller('gamesListCtrl', GamesListCtrl);
