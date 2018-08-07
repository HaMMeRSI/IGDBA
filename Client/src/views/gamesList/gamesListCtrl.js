import './gamesListStyle.less';

export default class GamesListCtrl {
	constructor ($scope, $route, $routeParams, $location, $http, $mdDialog) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';
		$scope.openGameView = this.openGameView;

		$http.get(`http://localhost:3000/games/getAllGames`).then((res) => {
			$scope.games = res.data;
		});

		$scope.showConfirm = (ev) => {
			// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.confirm()
				.title('Delete game')
				.textContent('Are you sure?')
				.ariaLabel('Delete game')
				.targetEvent(ev)
				.ok('Delete')
				.cancel('Cancel');

			$mdDialog.show(confirm).then(() => {
				$http.post('http://localhost:3000/games/deleteGame', { gameId: '5b69901af085192d6c6008d7' });
			}, () => {
			});
		};
	}

	openGameView (id) {
		window.location.href = `#!gameView?id=${id}`;
	}
}
IGDBA.controller('gamesListCtrl', GamesListCtrl);
