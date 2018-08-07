export default class GamesListCtrl {
	constructor ($scope, $route, $routeParams, $location) {
		this.url = 'https://images.igdb.com/igdb/image/upload/t_cover_big/faqrpb5usp5leipmwgtq.jpg';

		$scope.games = [
			{
				'_id': '5b362c84ed445d0d00f03262',
				'name': 'test',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': '',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69900ef085192d6c6008d6',
				'name': 'test2',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': '',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			},
			{
				'_id': '5b69901af085192d6c6008d7',
				'name': 'test3',
				'genre': 'action',
				'company': 'ea',
				'description': 'bla bla bla',
				'image': '',
				'releaseDate': '1989-12-31T22:00:00.000Z',
				'score': 95
			}
		];
	}
}
IGDBA.controller('gamesListCtrl', GamesListCtrl);
