import './gameUpdateView.less';

export default class gameUpdateViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		$http.get(`http://localhost:3000/games/getGameById?gameId=${$routeParams.id}`).then((res) => {
			$scope.data = res.data;
		});

		$scope.updateGame = () => {
			$http.post('http://localhost:3000/games/updateGame', { game: $scope.data }).then(() => {
				const ws = new WebSocket('ws://localhost:3001/');
				ws.onopen((ev) => {
					ws.send('game updated');
					ws.close();
				});
				window.location.href = `#!games`;
			});
		};
	}
}

IGDBA.controller('gameUpdateViewCtrl', gameUpdateViewCtrl);
