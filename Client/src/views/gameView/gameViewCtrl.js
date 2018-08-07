import './gameView.less';

export default class gameViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';

		$http.get(`http://localhost:3000/games/getGameById?gameId=${$routeParams.id}`).then((res) => {
			$scope.data = res.data;
		});
	}
}

IGDBA.controller('gameViewCtrl', gameViewCtrl);
