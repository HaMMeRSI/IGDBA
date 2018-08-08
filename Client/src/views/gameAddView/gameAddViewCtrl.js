import './gameAddView.less';

export default class gameAddViewCtrl {
	constructor ($scope, $route, $routeParams, $location, $http) {
		$scope.addGame = () => {
			$http.post('http://localhost:3000/games/addGame', { game: $scope.data }).then(() => {
				const ws = new WebSocket('ws://localhost:3001/');
				ws.onopen = (ev) => {
					ws.send('game added');
					ws.close();
				};

				ws.onclose = () => {
					window.location.href = `#!games`;
				};
			});
		};
	}
}

IGDBA.controller('gameAddViewCtrl', gameAddViewCtrl);
